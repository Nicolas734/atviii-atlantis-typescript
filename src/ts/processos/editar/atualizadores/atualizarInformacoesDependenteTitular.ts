import Armazem from "../../../dominio/armazem";
import Atualizador from "../../../interfaces/atualizador";
import Cliente from "../../../modelos/cliente";

export default class AtualizarInformacoesDependenteTitular implements Atualizador{
    private dependente!:Cliente
    private clientes!:Cliente[]
    private titular!:Cliente

    constructor(dependente:Cliente){
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.dependente = dependente
    }

    atualizar():void{
        this.titular = this.dependente.Titular

        let documentos:any = []

        this.dependente.Documentos.forEach(documento => {
            documentos.push({numero: documento.Numero})
        })

        for (let index = 0; index < documentos.length; index++) {
            let indiceListaDependentes = -1
            this.titular.Dependentes.forEach((dependente, i) => {
                dependente.Documentos.forEach(documento => {
                    if(documento.Numero === documentos[index].numero){
                        indiceListaDependentes = i
                    }
                });
            })

            if(indiceListaDependentes != -1){
                this.titular.Dependentes.splice(indiceListaDependentes, 1,this.dependente)
                this.dependente.setTitular = this.titular
            }
        }
    }
}