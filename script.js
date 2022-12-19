// Por exemplo, para inserir o símbolo de moeda do euro, 
// mantenha pressionada a tecla ALT e pressione 0128 no teclado numérico.

// new Intl.NumberFormat('en-US',
//     {style: 'currency', currency: 'USD' }
//     ).format(money)

const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.31
const euro = 5.64
const bitcoin = 88878.03
const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = inputReais

    // currencyValueText.innerHTML = inputReais / dolar
    if (select.value === 'US$ Dólar americano') {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)

    }

    if (select.value === '€ Euro') {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)

    }

    if (select.value === 'Bitcoin') {

        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)
    }

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)




}


changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./assets/estados_unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"
    }
convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
