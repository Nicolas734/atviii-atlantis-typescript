import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import MenuOpcaoTitularEditar from '../../menus/menusEditar/menuOpcaoTitularEditar';
import EditarDadosCliente from "./editarDadosCliente";
import EditarTelefoneCliente from "./editarTelefoneCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";
import BuscarTitular from "../buscas/buscarTitular";
import Impressor from "../../interfaces/impressor";
import ImpressorClienteDocumento from "../../impressores/impressorClienteDocumento";
import ImpressorCliente from "../../impressores/impressorCliente";
import AtualizarInformacoesTitularDependentes from "./atualizadores/atualizarInformacoesTitularDependentes";

export default class EditarClienteTitular extends Processo{
    private impressor!: Impressor
    private titular!:Cliente
    private busca:BuscarTitular = new BuscarTitular()

    constructor(){
        super()
        this.menu = new MenuOpcaoTitularEditar()
        this.execucao = true
    }

    processar(): void {

        this.titular = this.busca.buscar();

        if(this.titular === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.impressor = new ImpressorClienteDocumento(this.titular)
            console.log(this.impressor.imprimir())

            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        this.processo = new EditarDadosCliente(this.titular)
                        this.processo.processar()
                        break
                    case 2:
                        this.processo = new EditarTelefoneCliente(this.titular)
                        this.processo.processar()
                        break
                    case 3:
                        this.processo = new EditarEnderecoCliente(this.titular)
                        this.processo.processar()
                        break
                    case 4:
                        this.processo = new EditarDocumentoCliente(this.titular)
                        this.processo.processar()
                        break
                    case 0:
                        this.execucao = false
                        this.impressor = new ImpressorCliente(this.titular)
                        let atualizador = new AtualizarInformacoesTitularDependentes(this.titular)
                        atualizador.atualizar()
                        console.log(`Dados do titular atualizado com sucesso...\n`);
                        console.log(this.impressor.imprimir());
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
}