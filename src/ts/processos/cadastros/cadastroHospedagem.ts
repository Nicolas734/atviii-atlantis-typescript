import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Buscador from "../../interfaces/buscador";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";
import Hospedagem from "../../modelos/hospedagem";
import BuscarAcomodacao from "../buscas/buscarAcomodacao";
import BuscarTitular from "../buscas/buscarTitular";

export default class cadastroHospedagem extends Processo{
    private titular!:Cliente
    private acomodacao!:Acomodacao
    private hospedagens!:Hospedagem[]
    private busca:any

    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
        this.execucao = true
    }

    processar(): void {

        this.busca = new BuscarTitular()
        this.titular = this.busca.buscar()

        if(this.titular === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.busca = new BuscarAcomodacao()
            this.acomodacao = this.busca.buscar()
            if(this.acomodacao === undefined){
                console.log("Acomodação não encontrada...");
            }else{
                console.log("\nHospedagem realizada com sucesso...\n");
                this.execucao = false
                this.hospedagens.push(new Hospedagem(this.titular, this.acomodacao))
            }
        }
    }
}