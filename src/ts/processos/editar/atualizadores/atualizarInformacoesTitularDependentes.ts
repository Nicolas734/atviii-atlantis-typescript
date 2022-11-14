import Armazem from "../../../dominio/armazem";
import Atualizador from "../../../interfaces/atualizador";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";
import Telefone from "../../../modelos/telefone";

export default class AtualizarInformacoesTitularDependentes implements Atualizador{
    private titular!:Cliente
    private documentos:any[] = []
    private clientes!:Cliente[]

    constructor(titular:Cliente){
        this.titular = titular
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    atualizar():void{
        this.titular.Dependentes.forEach( dependente => {
            dependente.setTitular = this.titular
            dependente.Telefones.splice(0,dependente.Telefones.length)
            dependente.setTelefones = this.titular.Telefones.map(telefone => {
                return telefone.clonar() as Telefone
            }) || []
            dependente.Endereco = this.titular.Endereco.clonar() as Endereco
            dependente.Documentos.forEach(documento => {
                this.documentos.push({ numero:documento.Numero })
            })
        })

        for (let index = 0; index < this.documentos.length; index++) {
            let dependente = this.clientes.find((cliente:Cliente) => 
                cliente.Documentos.find( documento=> documento.Numero === this.documentos[index].numero )
            )

            if( dependente != undefined){
                dependente.setTitular = this.titular
                dependente.Telefones.splice(0,dependente.Telefones.length)
                dependente.setTelefones = this.titular.Telefones.map(telefone => {
                    return telefone.clonar() as Telefone
                }) || []
                dependente.Endereco = this.titular.Endereco.clonar() as Endereco
            }
        }
    }
}