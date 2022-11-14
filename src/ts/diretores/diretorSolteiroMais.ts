import Diretor from "../abstracoes/diretor";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";

export default class DiretorSolteiroMais extends Diretor<Acomodacao>{

    constructor(){
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroMais
        objetoConstrutor.CamaSolteiro = 0
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.Suite = 1
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 1
        return objetoConstrutor.construir()
    }
    
}