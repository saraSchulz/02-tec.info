import { moedaPais, idioma } from "./global";

function formataPreco(preco) {
    return preco.toLocaleString(idioma, {
        style: 'currency',
        currency: moedaPais,
    })

}

export { formataPreco }