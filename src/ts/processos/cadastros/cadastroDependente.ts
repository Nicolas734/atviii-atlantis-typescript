import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuOpcaoCadastroDependente from "../../menus/menuOpcaoCadastroDependente";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import ListagemTitulares from "../listagens/listagemTitulares";
import CadastrarDocumentosCliente from "./documento/cadastrarDocumentosCliente";

export default class CadastroDependente extends Processo{
    private dependente!: Cliente
    private clientes: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuOpcaoCadastroDependente()
        this.execucao = true
    }

    processar(): void {

        this.processo = new ListagemTitulares()
        this.processo.processar()

        let documentoTitular = this.entrada.receberTexto('Digite o numero do documento do titular: ')
        let titular =  this.clientes.find((cliente:Cliente) => cliente.Documentos.find( documento=> documento.Numero === documentoTitular ))

        if(!titular){
            console.log(`Titular não encontrado.`);
        }else{

            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Deseja cadastrar ')

            switch(opcao){
                case 1:
                    console.log('Iniciando cadastro do dependente');
                    let nome = this.entrada.receberTexto('Qual o nome do dependente: ');
                    let nomeSocial = this.entrada. receberTexto('QUal o nome social do dependente: ');
                    let dataNascimento = this.entrada.receberData('Qual a data de nascimento do dependente');
                    this.dependente = new Cliente(nome, nomeSocial, dataNascimento)

                    this.processo = new CadastrarDocumentosCliente(this.dependente)
                    this.processo.processar()

                    this.dependente.Endereco = titular?.Endereco.clonar() as Endereco
                    this.dependente.setTelefones = titular?.Telefones.map(telefone => {
                        return telefone.clonar() as Telefone
                    }) || []
                    this.dependente.setTitular = titular

                    titular.setDependente = this.dependente
                    this.clientes.push(this.dependente)

                    console.log('Finalizando o cadastro do cliente dependente ...')

                    break;


                case 2:
                    console.log('Iniciando cadastro dos dependentes');

                    while(this.execucao){

                        let nome = this.entrada.receberTexto('Qual o nome do dependente: ');
                        let nomeSocial = this.entrada. receberTexto('QUal o nome social do dependente: ');
                        let dataNascimento = this.entrada.receberData('Qual a data de nascimento do dependente');
                        this.dependente = new Cliente(nome, nomeSocial, dataNascimento)

                        this.processo = new CadastrarDocumentosCliente(this.dependente)
                        this.processo.processar()

                        this.dependente.Endereco = titular?.Endereco.clonar() as Endereco
                        this.dependente.setTelefones = titular?.Telefones.map(telefone => {
                            return telefone.clonar() as Telefone
                        }) || []
                        this.dependente.setTitular = titular

                        titular.setDependente = this.dependente
                        this.clientes.push(this.dependente)

                        let opcao = this.entrada.receberTexto('Deseja cadastrar outro dependente [SIM/NAO]: ')

                        if(opcao.toUpperCase() != 'SIM'){
                            this.execucao = false
                        }

                    }
                    console.log('Finalizando o cadastros dos clientes dependentes ...')

                    break;
            }
        }
    }
}