import Diretor from "../../abstracoes/diretor"
import Processo from "../../abstracoes/processo"
import DiretorCasalSimples from "../../diretores/diretorCasalSimples"
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais"
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples"
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper"
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais"
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples"
import Armazem from "../../dominio/armazem"
import Acomodacao from "../../modelos/acomodacao"


export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private diretor!: Diretor<Acomodacao>
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        this.diretor = new DiretorCasalSimples()
        this.acomodacoes.push(this.diretor.construir())

        this.diretor = new DiretorFamiliaSimples()
        this.acomodacoes.push(this.diretor.construir())

        this.diretor = new DiretorFamiliaMais()
        this.acomodacoes.push(this.diretor.construir())

        this.diretor = new DiretorFamiliaSuper()
        this.acomodacoes.push(this.diretor.construir())

        this.diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(this.diretor.construir())

        this.diretor = new DiretorSolteiroMais()
        this.acomodacoes.push(this.diretor.construir())

    }
}