import Menu from "../interfaces/menu";

export default class MenuOpcaoAcomodacoes implements Menu{
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Acomodações disponiveis... `)
        console.log(`----------------------`)
        console.log(`| 1 - Acomodação simples para casal`)
        console.log(`| 2 - Acomodação para família com até duas crianças`)
        console.log(`| 3 - Acomodação para família com até cinco crianças`)
        console.log(`| 4 - Acomodação para até duas familias, casal e três crianças cada`)
        console.log(`| 5 - Acomodação simples para solteiro(a)`)
        console.log(`| 6 - Acomodação com garagem para solteiro(a)`)
        console.log(`----------------------`)
    }
}