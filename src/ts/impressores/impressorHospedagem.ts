import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";

export default class ImpressorHospedagem implements Impressor{
    private hospedagem!:Hospedagem

    constructor(hospedagem:Hospedagem){
        this.hospedagem = hospedagem
    }

    imprimir(): string {
        
        let impressao = "\n" 
        + `| Tipo de acomodação: ${this.hospedagem.getAcomodacao.NomeAcomadacao}\n`
        + `| Data de Hospedagem: ${this.hospedagem.getDataCadastro.toLocaleDateString()}\n`
        + `|\n`
        + `| -- Hospede --\n`
        + `|\n`
        + `| Nome: ${this.hospedagem.getTitular.Nome}\n`
        + `| Nome social: ${this.hospedagem.getTitular.NomeSocial}\n`
        + `| Data de nascimento: ${this.hospedagem.getTitular.DataNascimento}\n`
        + `| Data cadastro: ${this.hospedagem.getDataCadastro}\n`

        if(this.hospedagem.getTitular.Dependentes.length > 0){
            impressao = impressao + `|\n` +  `| -- Acompanhantes\n`+ `|\n`
            this.hospedagem.getTitular.Dependentes.forEach((dependente,i) => {
                impressao = impressao 
                + `| Nome: ${dependente.Nome}\n`
                + `| Nome social: ${dependente.NomeSocial}\n`
                + `| Data de nascimento: ${dependente.DataNascimento}\n`
                if(i != this.hospedagem.getTitular.Dependentes.length - 1){
                    impressao = impressao + `| ----------------------------------------\n`
                }
            })
        }

        return impressao
    }
    
}