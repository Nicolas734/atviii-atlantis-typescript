import Processo from "../../abstracoes/processo";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import MenuOpcaoDocumento from "../../menus/menusEditar/menuOpcaoDocumento";
import Cliente from "../../modelos/cliente";

export default class EditarDocumentoCliente extends Processo{
    private cliente:Cliente
    private impressor!:Impressor

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoDocumento()
        this.execucao = true
    }

    processar(): void {

        this.impressor = new ImpressorCliente(this.cliente)
        console.log(this.impressor.imprimir())

        let numeroDocumento = this.entrada.receberTexto('Qual o numero do documento que deseja atualizar?')
        let documento = this.cliente.Documentos.find((doc) => numeroDocumento === doc.Numero)

        if(!documento){
            console.log('Documento não encontrado');
        }else{
            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        let novoNumero = this.entrada.receberTexto(`Digite o novo numero do ${documento.Tipo}: `)
                        documento.setNumero = novoNumero
                        break
                    case 2:
                        let novaDataExpedicao = this.entrada.receberData(`Digite a nova data de expedição do ${documento.Tipo}: `)
                        documento.setDataExpedicao = novaDataExpedicao
                        break
                    case 0:
                        this.execucao = false
                        break
                    default:
                        console.log('Operação não entendida.');
                }
            }
        }
    }
}