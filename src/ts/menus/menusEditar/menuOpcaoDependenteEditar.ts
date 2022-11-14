import Menu from "../../interfaces/menu";

export default class MenuOpcaoDependenteEditar implements Menu{
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Dados do Cliente`)
        console.log(`| 2 - Documentos`);
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}