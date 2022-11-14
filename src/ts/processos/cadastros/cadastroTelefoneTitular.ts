import Processo from "../../abstracoes/processo"
import Entrada from "../../io/entrada"
import Cliente from "../../modelos/cliente"
import Telefone from "../../modelos/telefone"

export default class CadastroTelefoneTitular extends Processo{
    private cliente!: Cliente

    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        while(this.execucao){
            let opcao = this.entrada.receberTexto('Deseja cadastrar um telefone ?')

            if(opcao === 'sim'){
                let dddNumero = this.entrada.receberTexto(`Por favor informe o DDD e o numero de telefone, no padrão (xx) xxxx-xxxx: `)
                let separacao = dddNumero.split(')')
                let dadosNumero = separacao[0] + ")-" + separacao[1]
                let numeroEddd = dadosNumero.split("-")
                let ddd = new String(numeroEddd[0].valueOf()).valueOf()
                let numero = new String(numeroEddd[1].valueOf()).valueOf()
                let telefone = new Telefone(ddd,numero)
                this.cliente.Telefones.push(telefone)
            }else{
                this.execucao = false
            }

        }
    }

}