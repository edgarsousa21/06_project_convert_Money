

const button = document.getElementById('convert-button')
const selectOne = document.getElementById('current-select-one')
const selectTwo = document.getElementById('currency-select-two')


const convertValues = async () => {
    const inputSelectOne = document.getElementById('input-select-one').value
    const currencyNameOne = document.getElementById('currency-name-one')
    const currencyNameTwo = document.getElementById('currency-name-Two')
    const currencyValueTextOne = document.getElementById('currency-value-text-one')
    const currencyValueTextTwo = document.getElementById('currency-value-text-two')

    // async await
    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    console.log(data)


    const dolar = (Number(data.USDBRL.low) + Number(data.USDBRL.high)) / 2 // obs: Foi feita uma média entre a 
    const euro = (Number(data.EURBRL.low) + Number(data.EURBRL.high)) / 2  // alta e a baixa de cada moeda
    const bitcoin = (Number(data.BTCBRL.low) + Number(data.BTCBRL.high)) / 2



    realToCurrencys() // CONVERTE REAL PARA OUTRAS MOEDAS
    dolarToCurrencys() // CONVERTE DOLAR PARA OUTRAS MOEDAS
    euroToCurrencys() // CONVERTE EURO PARA OUTRAS MOEDAS
    equalCurrencys() // SE A PRIMEIRA MOEDA FOR IGUAL A SEGUNDA, O VALOR SERÁ O MESMO.


    // FORMATAÇÃO DE CADA MOEDA COLOCADA EM FUNÇÕES: 

    function formatCurrencyToReal(inputSelectOne) {
        const money = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputSelectOne)
        return money

    }

    function formatCurrencyToDolar(inputSelectOne) {
        const money = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputSelectOne)
        return money
    }

    function formatCurrencyToEuro(inputSelectOne) {
        const money = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputSelectOne)
        return money
    }

    function formatCurrencyToBitcoin(inputSelectOne) {
        const money = new Intl.NumberFormat('BTC',
            { style: 'currency', currency: 'BTC' }
        ).format(inputSelectOne)

        return money
    }

    // FUNÇÕES CALCULANDO E EXIBINDO O VALOR DAS MOEDAS CONVERTIDAS:

    function equalCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'real') {

            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne)
        }// REAL REAL

        if (selectOne.value === 'dolar' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne)
        }// DOLAR DOLAR

        if (selectOne.value === 'euro' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne)
        }// EURO EURO

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
        }// BITCOIN BITCOIN

    } // equalCurrencys()


    function realToCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne / dolar)         
        }// REAL PARA DOLAR        

        if (selectOne.value === 'dolar' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * dolar)
        }// DOLAR PARA REAL

        if (selectOne.value === 'real' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne / euro)
        }// REAL PARA EURO

        if (selectOne.value === 'euro' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * euro)
        }// EURO PARA REAL 

        if (selectOne.value === 'real' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne / bitcoin).toFixed(7)}`
        }// REAL PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * bitcoin)
        }// BITCOIN PARA REAL  
    }

    function dolarToCurrencys() {

        if (selectOne.value === 'dolar' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne * (dolar / euro))
        }// DOLAR PARA EURO

        if (selectOne.value === 'euro' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne * (euro / dolar))
        }// EURO PARA DOLAR

        if (selectOne.value === 'dolar' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * (dolar / bitcoin)).toFixed(7)}`
        }// DOLAR PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`            
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne * (bitcoin / dolar))            
        }// BITCOIN PARA DOLAR
    }

    function euroToCurrencys() {
        if (selectOne.value === 'euro' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * (euro / bitcoin)).toFixed(7)}`
        }// EURO PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne * (bitcoin / euro))            
        }// BITCOIN PARA EURO
    }

}// convertvalues()

changeCurrencyOne = () => {
    const currencyNameOne = document.getElementById('currency-name-one')
    const currencyImgOne = document.getElementById('currency-img-one')

    if (selectOne.value === 'real') {
        currencyNameOne.innerHTML = 'Real Brasileiro'
        currencyImgOne.src = "./assets/brasil.png"
    }

    if (selectOne.value === 'dolar') {
        currencyNameOne.innerHTML = 'Dólar Americano'
        currencyImgOne.src = "./assets/estados_unidos.png"
    }

    if (selectOne.value === 'euro') {
        currencyNameOne.innerHTML = 'Euro'
        currencyImgOne.src = "./assets/euro.png"
    }

    if (selectOne.value === 'bitcoin') {
        currencyNameOne.innerHTML = 'Bitcoin'
        currencyImgOne.src = "./assets/bitcoin.png"
    }
    convertValues()
}

changeCurrencyTwo = () => {
    const currencyNameTwo = document.getElementById('currency-name-two')
    const currencyImgTwo = document.getElementById('currency-img-two')

    if (selectTwo.value === 'real') {
        currencyNameTwo.innerHTML = 'Real Brasileiro'
        currencyImgTwo.src = "./assets/brasil.png"
    }

    if (selectTwo.value === 'dolar') {
        currencyNameTwo.innerHTML = 'Dólar Americano'
        currencyImgTwo.src = "./assets/estados_unidos.png"
    }

    if (selectTwo.value === 'euro') {
        currencyNameTwo.innerHTML = 'Euro'
        currencyImgTwo.src = "./assets/euro.png"
    }

    if (selectTwo.value === 'bitcoin') {
        currencyNameTwo.innerHTML = 'Bitcoin'
        currencyImgTwo.src = "./assets/bitcoin.png"
    }
    convertValues()
}



button.addEventListener('click', convertValues)
selectOne.addEventListener('change', changeCurrencyOne)
selectTwo.addEventListener('change', changeCurrencyTwo)
