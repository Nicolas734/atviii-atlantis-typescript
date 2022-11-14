import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Listar titular por documento`)
        console.log(`| 3 - Todos os dependentes`)
        console.log(`| 4 - Listar dependente por documento`)
        console.log(`| 5 - Todos os dependentes de um titular específico`)
        console.log(`| 6 - Listar o titular de um dependente especifico`)
        console.log(`----------------------`)
    }
}