import Menu from "../interfaces/menu";

export default class MenuOpcaoCadastroDependente implements Menu{
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Qual o tipo do cliente para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar um dependente`)
        console.log(`| 2 - Cadastrar multiplos Dependentes`)
        console.log(`----------------------`)
    }
}