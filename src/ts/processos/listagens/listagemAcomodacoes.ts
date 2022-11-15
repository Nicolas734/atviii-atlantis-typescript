
import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao";
import Impressor from "../../interfaces/impressor";
import Acomodacao from "../../modelos/acomodacao";


export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        console.log(this.acomodacoes);
        console.clear()
        console.log('\nIniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        this.acomodacoes.forEach((acomodacao,i) => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log( "["+ (i + 1) + "] " +this.impressor.imprimir())
            console.log(`-------------------------------------------------\n`)
        })
    }
}