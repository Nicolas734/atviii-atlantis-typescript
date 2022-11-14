import Processo from "../../abstracoes/processo";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import MenuOpcaoDependenteEditar from "../../menus/menusEditar/menuOpcaoDependenteEditar";
import Cliente from "../../modelos/cliente";
import BuscarDependente from "../buscas/buscarDependente";
import AtualizarInformacoesDependenteTitular from "./atualizadores/atualizarInformacoesDependenteTitular";
import EditarDadosCliente from "./editarDadosCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";

export default class EditarClienteDependente extends Processo{
    private dependente!:Cliente
    private impressor!:Impressor
    private busca:BuscarDependente = new BuscarDependente()

    constructor(){
        super()
        this.menu = new MenuOpcaoDependenteEditar()
        this.execucao = true
    }

    processar(): void {
        
        this.dependente = this.busca.buscar()

        if(this.dependente === undefined){
            console.log('Dependente não encontrado...');
        }else{
            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada? ')

                switch(this.opcao){
                    case 1:
                        this.processo = new EditarDadosCliente(this.dependente)
                        this.processo.processar()
                        break
                    case 2:
                        this.processo = new EditarDocumentoCliente(this.dependente)
                        this.processo.processar()
                        break
                    case 0:
                        this.execucao = false
                        this.impressor = new ImpressorDependente(this.dependente)
                        let atualizador = new AtualizarInformacoesDependenteTitular(this.dependente)
                        atualizador.atualizar()
                        console.log(`Dados do dependente atualizado com sucesso...\n`);
                        console.log(this.impressor.imprimir());
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
    
}