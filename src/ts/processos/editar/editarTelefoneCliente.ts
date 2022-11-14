import Processo from "../../abstracoes/processo";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import MenuOpcaoTelefones from "../../menus/menusEditar/menuOpcaoTelefones";
import Cliente from "../../modelos/cliente";

export default class EditarTelefoneCliente extends Processo{
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoTelefones()
        this.execucao = true
    }

    processar(): void {

        this.impressor = new ImpressorCliente(this.cliente)
        console.log(this.impressor.imprimir())

        let telefone = this.entrada.receberTexto('Qual o telefone que deseja atualizar? ')
        let telefoneSelecionado = this.cliente.Telefones.find((tel) => tel.Numero === telefone )

        if(!telefoneSelecionado){
            console.log('Telefone não encontrado');
        }else{
            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        let novoDdd: string = this.entrada.receberTexto('Digite o novo ddd: ')
                        telefoneSelecionado.setDDD = novoDdd
                        break
                    case 2:
                        let novoNumero: string = this.entrada.receberTexto('Digite o novo numero: ')
                        telefoneSelecionado.setNumero = novoNumero
                        break
                    case 0:
                        this.execucao = false
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }

}