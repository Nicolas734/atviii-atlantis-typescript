import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import GerarClientes from "../scripts/gerarClientes"
import CadastroAcomodacoes from "./cadastros/cadastroAcomodacoes"
import cadastroHospedagem from "./cadastros/cadastroHospedagem"
import ListagemAcomodacoes from "./listagens/listagemAcomodacoes"
import ListagemDependenteTitular from "./listagens/listagemDependenteTitular"
import ListagemHospedagem from "./listagens/listagemHospedage"
import TipoCadastroCliente from "./menus/tipoCadastroCliente"
import TipoEditarCliente from "./menus/tipoEditarCliente"
import TipoExcluirCliente from "./menus/tipoExcluirCliente"
import TipoListagemClientes from "./menus/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExcluirCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new GerarClientes()
                this.processo.processar()
                break;
            case 6:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            case 7:
                this.processo = new cadastroHospedagem()
                this.processo.processar()
                break;
            case 8:
                this.processo = new ListagemHospedagem()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}