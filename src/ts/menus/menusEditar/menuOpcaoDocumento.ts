import Menu from "../../interfaces/menu";

export default class MenuOpcaoDocumento implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha o que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Numero`)
        console.log(`| 2 - Data expedição`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}