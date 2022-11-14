import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import ListagemDependentes from "../listagens/listagemDependentes";

export default class ExcluirDependente extends Processo{
    private clientes!: Cliente[]
    private titular!:Cliente
    private indice:number = -1

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {

        this.processo = new ListagemDependentes()
        this.processo.processar()

        let numeroDocumento = this.entrada.receberTexto(`Digite o numero do documento do dependente: `)

        this.clientes.forEach((cliente,indice )=> {
            cliente.Documentos.forEach( documento => {
                if( documento.Numero === numeroDocumento ){
                    this.indice = indice
                    this.titular = cliente.Titular
                }
            })
        })

        if(this.indice === -1){
            console.log(`Dependente não encontrado...`);
        }else{

            let i = this.titular.Dependentes.findIndex(dependente => 
                dependente.Documentos.find(documento => 
                    documento.Numero === numeroDocumento
                )
            );

            if(i === -1){
                console.log("algo de errado não está certo...");
            }else{
                this.clientes.splice(this.indice, 1)
                this.titular.Dependentes.splice(i, 1)
            }

        }

    }
}