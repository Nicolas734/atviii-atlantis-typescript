import Menu from "../../interfaces/menu";

export default class MenuOpcaoEditar implements Menu{
    mostrar(): void {
        // console.clear()
        console.log(`****************************`)
        console.log(`| O que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Dados do Cliente`)
        console.log(`| 2 - Telefones`)
        console.log(`| 3 - Endereço`)
        console.log(`| 4 - Documentos`);
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}