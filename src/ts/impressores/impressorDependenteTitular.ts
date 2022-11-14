import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressorDependenteTitular implements Impressor{
    private cliente!:Cliente
    private impressor!:Impressor

    constructor(cliente:Cliente){
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `****************************\n`
        + `| -- Titular do cliente dependente ${this.cliente.Nome} --\n`
        + `| \n`
        + `| Nome: ${this.cliente.Titular.Nome}\n`
        + `| Nome social: ${this.cliente.Titular.NomeSocial}\n`
        + `| Data de nascimento: ${this.cliente.Titular.DataNascimento.toLocaleDateString()}`
        + `| Data de cadastro: ${this.cliente.Titular.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorTelefones(this.cliente.Titular.Telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        
        this.impressor = new ImpressorEndereco(this.cliente.Titular.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        
        this.impressor = new ImpressorDocumentos(this.cliente.Titular.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        return impressao
    }
}