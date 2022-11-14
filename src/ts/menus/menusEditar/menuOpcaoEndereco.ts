import Menu from "../../interfaces/menu";

export default class MenuOpcaoEndereco implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Escolha o que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Rua`)
        console.log(`| 2 - Bairro`)
        console.log(`| 3 - Cidade`)
        console.log(`| 4 - Estado`)
        console.log(`| 5 - Pais`)
        console.log(`| 6 - Cep`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}