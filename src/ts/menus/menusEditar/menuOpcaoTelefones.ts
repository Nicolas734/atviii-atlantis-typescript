import Menu from "../../interfaces/menu";

export default class MenuOpcaoTelefones implements Menu{
    mostrar(): void {
        // console.clear()
        console.log(`****************************`)
        console.log(`| Escolha o que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - DDD`)
        console.log(`| 2 - Número`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}