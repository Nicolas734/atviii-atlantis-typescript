import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "./listagemTitulares";

export default class ListagemTitularDependentes extends Processo{
    private clientes:Cliente[]
    private impressor!:Impressor

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {

        this.processo = new ListagemTitulares()
        this.processo.processar()

        let numeroDocumento = this.entrada.receberTexto('Digite o numero do documento do titular: ')
        let titular = this.clientes.find(
            (cliente:Cliente) => cliente.Documentos.find(
            (documento:Documento ) => documento.Numero === numeroDocumento
        ))

        if(!titular){
            console.log('Titular não encontrado.');
        }else{
            console.log(`\nListagem de dependentes do titular ${titular.Nome}\n`);
            titular.Dependentes.forEach((dependente) => {
                this.impressor = new ImpressorCliente(dependente)
                console.log(this.impressor.imprimir());
            })
        }
    }

}