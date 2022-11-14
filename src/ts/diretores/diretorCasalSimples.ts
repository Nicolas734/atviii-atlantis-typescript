import Diretor from "../abstracoes/diretor";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";

export default class DiretorCasalSimples extends Diretor<Acomodacao>{

    constructor(){
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoContrutor = this.construtor as ConstrutorAcomodacao
        objetoContrutor.NomeAcomodacao = NomeAcomadacao.CasalSimples
        objetoContrutor.CamaSolteiro = 0
        objetoContrutor.CamaCasal = 1
        objetoContrutor.Suite = 1
        objetoContrutor.Climatizacao = true
        objetoContrutor.Garagem = 1
        return objetoContrutor.construir()
    }

}