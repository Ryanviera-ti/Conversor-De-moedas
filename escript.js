let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function converterMoedas() {

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta){
   return resposta.json()
})
let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high


    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")




    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    }



    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("en-US", { style: "currency", currency: "EUR" })
    }



    

}
function trocaDemoedas() {
    let textoMoedas = document.getElementById("texto-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        let bandeiraMoedas = document.getElementById("bandeira-moedas")
        bandeiraMoedas.src = "./Image/eua.png"

    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        let bandeiraMoedas = document.getElementById("bandeira-moedas")
        bandeiraMoedas.src = "./Image/euro.png"

    }
      converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDemoedas)


