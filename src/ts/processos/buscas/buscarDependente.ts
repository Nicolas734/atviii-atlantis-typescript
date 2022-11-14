import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Buscador from "../../interfaces/buscador";
import Entrada from "../../io/entrada";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemDependentes from "../listagens/listagemDependentes";

export default class BuscarDependente implements Buscador<Cliente>{
    private clientes!:Cliente[]
    private dependente!:Cliente
    private entrada = new Entrada()

    constructor(){
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    buscar(): Cliente {

        let listagem = new ListagemDependentes()
        listagem.processar()

        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do dependente desejado: ")

        this.clientes.forEach( (cliente:Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if(documento.Numero === numeroDocumento){
                    this.dependente = cliente
                }
            })
        })

        return this.dependente
    }
}