import Processo from "../../abstracoes/processo";
import MenuOpcaoDadosCliente from "../../menus/menusEditar/menuOpcaoDadosCliente";
import Cliente from "../../modelos/cliente";

export default class EditarDadosCliente extends Processo{
    private cliente:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoDadosCliente()
        this.execucao = true
    }

    processar(): void {
        
        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada atualizar?')

            switch(this.opcao){
                case 1:
                    let novoNome = this.entrada.receberTexto('Digite o novo nome: ')
                    this.cliente.setNome = novoNome
                    console.log('Nome atualizado.');
                    break
                case 2:
                    let novoNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ')
                    this.cliente.setNomeSocial = novoNomeSocial
                    console.log('Nome social atualizado');
                    break
                case 3:
                    let novaDataNascimento = this.entrada.receberData('Digite a nova data de nascimento: ')
                    this.cliente.setDataNascimento = novaDataNascimento
                    console.log('Data de nascimento atualizado');
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