import Processo from "../../abstracoes/processo";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import BuscarTitular from "../buscas/buscarTitular";

export default class ListagemTitularPorDocumento extends Processo{
    private cliente!:Cliente
    private impressor!:Impressor
    private busca:BuscarTitular = new BuscarTitular()

    constructor(){
        super()
    }

    processar(): void {
        
        this.cliente = this.busca.buscar()

        if(this.cliente === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.impressor = new ImpressorCliente(this.cliente)
            console.log(this.impressor.imprimir());
        }

    }
    
}