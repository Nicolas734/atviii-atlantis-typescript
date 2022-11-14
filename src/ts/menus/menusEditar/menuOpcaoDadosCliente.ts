import Menu from "../../interfaces/menu";

export default class MenuOpcaoDadosCliente implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha o que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome social`)
        console.log(`| 3 - Data de Nascimento`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}