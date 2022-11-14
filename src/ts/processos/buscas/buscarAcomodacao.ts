import Armazem from "../../dominio/armazem";
import Buscador from "../../interfaces/buscador";
import Entrada from "../../io/entrada";
import Acomodacao from "../../modelos/acomodacao";
import ListagemAcomodacoes from "../listagens/listagemAcomodacoes";

export default class BuscarAcomodacao implements Buscador<Acomodacao>{
    private acomodacao!:Acomodacao
    private acomodacoes!:Acomodacao[]
    private entrada = new Entrada()

    constructor(){
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    buscar(): Acomodacao {

        let listagem = new ListagemAcomodacoes()
        listagem.processar()

        let opcaoAcomodacao = this.entrada.receberNumero("Qual acomodação voçê deseja ?")
        this.acomodacao = this.acomodacoes[opcaoAcomodacao - 1]

        return this.acomodacao

    }

}