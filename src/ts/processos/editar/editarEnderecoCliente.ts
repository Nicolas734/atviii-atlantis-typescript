import Processo from "../../abstracoes/processo";
import MenuOpcaoEndereco from "../../menus/menusEditar/menuOpcaoEndereco";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EditarEnderecoCliente extends Processo{
    private cliente!:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoEndereco()
        this.execucao = true
    }

    processar(): void {
        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada atualizar?')

            switch(this.opcao){
                case 1:
                    let novaRua = this.entrada.receberTexto('Digite a nova rua: ')
                    this.cliente.Endereco.setRua = novaRua
                    break
                case 2:
                    let novoBairro = this.entrada.receberTexto('Digite o novo bairro: ')
                    this.cliente.Endereco.setBairro = novoBairro
                    break
                case 3:
                    let novaCidade = this.entrada.receberTexto('Digite a nova cidade: ')
                    this.cliente.Endereco.setCidade = novaCidade
                    break
                case 4:
                    let novoEstado = this.entrada.receberTexto('Digite o novo estado: ')
                    this.cliente.Endereco.setEstado = novoEstado
                    break
                case 5:
                    let novoPais = this.entrada.receberTexto('Digite o novo pais: ')
                    this.cliente.Endereco.setPais = novoPais
                    break
                case 6:
                    let novoCep = this.entrada.receberTexto('Digite o novo cep: ')
                    this.cliente.Endereco.setCodigoPostal = novoCep
                    break
                case 0:
                    this.cliente.Dependentes.forEach(dependente => {
                        dependente.Endereco = this.cliente.Endereco.clonar() as Endereco
                    })
                    this.execucao = false
                    break
                default:
                    console.log('Operação não entendida.');
            }
        }
    }
    
}