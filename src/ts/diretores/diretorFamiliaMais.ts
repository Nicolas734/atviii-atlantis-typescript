import Diretor from "../abstracoes/diretor";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import Acomodacao from "../modelos/acomodacao";

export default class DiretorFamiliaMais extends Diretor<Acomodacao>{

    constructor(){
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.Suite = 2
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        return objetoConstrutor.construir()
    }

}