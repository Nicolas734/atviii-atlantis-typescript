import Processo from "../../abstracoes/processo";
import MenuTipoEditarCliente from "../../menus/menuTipoEditarCliente";
import EditarClienteDependente from "../editar/editarClienteDependente";
import EditarClienteTitular from "../editar/editarClienteTitular";

export default class TipoEditarCliente extends Processo{
    constructor(){
        super()
        this.menu = new MenuTipoEditarCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch(this.opcao){
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Operação não entendida.');
        }
    }

}