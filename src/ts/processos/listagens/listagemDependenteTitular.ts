import { threadId } from "worker_threads";
import Processo from "../../abstracoes/processo";
import ImpressorCliente from "../../impressores/impressorCliente";
import ImpressorDependenteTitular from "../../impressores/impressorDependenteTitular";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import BuscarDependente from "../buscas/buscarDependente";

export default class ListagemDependenteTitular extends Processo{
    private impressor!:Impressor

    constructor(){
        super()
    }

    processar(): void {
        
        let buscar= new BuscarDependente()
        let dependente = buscar.buscar()
        
        if(dependente === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.impressor = new ImpressorDependenteTitular(dependente)
            console.log(this.impressor.imprimir())
        }
    }
}