import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo{
    private clientes!:Cliente[]
    private impressor!: Impressor

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        
        console.clear();
        console.log("Iniciando a listagem dos clientes dependentes...");
        this.clientes.forEach(dependente => {
            if(this.titular(dependente)){
                this.impressor = new ImpressorDependente(dependente)
                console.log(this.impressor.imprimir())
            }
        })
    }

    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular != undefined) {
            verificacao = true
        }
        return verificacao
    }
    
}