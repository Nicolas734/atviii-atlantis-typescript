import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    private acomodacoes:Acomodacao[]
    private titular!:Cliente
    private dataCadastro:Date

    constructor(titular:Cliente, acomodacoes:Acomodacao[]){
        this.titular = titular
        this.acomodacoes = acomodacoes
        this.dataCadastro = new Date()
    }

    public get getAcomodacao():Acomodacao[]{
        return this.acomodacoes
    }

    public get getTitular():Cliente{
        return this.titular
    }

    public get getDataCadastro():Date{
        return this.dataCadastro
    }

}