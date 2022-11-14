import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Buscador from "../../interfaces/buscador";
import Entrada from "../../io/entrada";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "../listagens/listagemTitulares";

export default class BuscarTitular implements Buscador<Cliente>{
    private titular!: Cliente
    private clientes!: Cliente[]
    private entrada = new Entrada()

    constructor(){
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    buscar() {
        
        let listagem = new ListagemTitulares()
        listagem.processar()
        
        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do titular desejado: ")

        this.clientes.forEach( (cliente: Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if( documento.Numero === numeroDocumento){
                    this.titular = cliente
                }
            })
        })

        return this.titular

    }
}