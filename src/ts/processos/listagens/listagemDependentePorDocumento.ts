import Processo from "../../abstracoes/processo";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import BuscarDependente from "../buscas/buscarDependente";

export default class ListagemDependentePorDocumento extends Processo{
    private cliente!:Cliente
    private impressor!:Impressor
    private busca:BuscarDependente = new BuscarDependente()

    constructor(){
        super()
    }

    processar(): void {
        

        this.cliente = this.busca.buscar()

        if(this.cliente === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.impressor = new ImpressorDependente(this.cliente)
            console.log(this.impressor.imprimir());
        }

    }
    
}