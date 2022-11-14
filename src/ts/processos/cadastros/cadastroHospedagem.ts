import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";
import Hospedagem from "../../modelos/hospedagem";
import BuscarTitular from "../buscas/buscarTitular";

export default class cadastroHospedagem extends Processo{
    private titular!:Cliente
    private acomodacoes!:Acomodacao[]
    private hospedagens!: Hospedagem[]
    private busca: BuscarTitular = new BuscarTitular()

    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
    }

    processar(): void {
        
        this.titular = this.busca.buscar()
        console.log(this.titular);
        
    }
    
}