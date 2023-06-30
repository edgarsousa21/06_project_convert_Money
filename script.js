

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


    const dolar = (Number(data.USDBRL.low) + Number(data.USDBRL.high)) / 2
    const euro = (Number(data.EURBRL.low) + Number(data.EURBRL.high)) / 2
    const bitcoin = (Number(data.BTCBRL.low) + Number(data.BTCBRL.high)) / 2



    realToCurrencys() // CONVERTE REAL PARA OUTRAS MOEDAS
    dolarToCurrencys() // CONVERTE DOLAR PARA OUTRAS MOEDAS
    euroToCurrencys() // CONVERTE EURO PARA OUTRAS MOEDAS
    equalCurrencys() // SE A PRIMEIRA MOEDA FOR IGUAL A SEGUNDA, O VALOR SERÁ O MESMO.

    function equalCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne)

        }// REAL REAL

        if (selectOne.value === 'dolar' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne)

        }// DOLAR DOLAR

        if (selectOne.value === 'euro' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne)

        }// EURO EURO

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('BTC',
                { style: 'currency', currency: 'BTC' }
            ).format(inputSelectOne)


            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('BTC',
                { style: 'currency', currency: 'BTC' }
            ).format(inputSelectOne)


        }// BITCOIN BITCOIN




    }

    function realToCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne / dolar)

        }// REAL PARA DOLAR

        if (selectOne.value === 'dolar' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne * dolar)
        }// DOLAR PARA REAL

        if (selectOne.value === 'real' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne / euro)

        }// REAL PARA EURO

        if (selectOne.value === 'euro' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne * euro)
        }// EURO PARA REAL 

        if (selectOne.value === 'real' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne / bitcoin).toFixed(7)}`

        }// REAL PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputSelectOne * bitcoin)
        }// BITCOIN PARA REAL  
    }

    function dolarToCurrencys() {
        if (selectOne.value === 'dolar' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne * dolar / euro)
        }// DOLAR PARA EURO

        if (selectOne.value === 'euro' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne * euro / dolar)
        }// EURO PARA DOLAR

        if (selectOne.value === 'dolar' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * dolar / bitcoin).toFixed(7)}`
        }// DOLAR PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputSelectOne * bitcoin / dolar)
        }// BITCOIN PARA DOLAR
    }

    function euroToCurrencys() {
        if (selectOne.value === 'euro' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne)

            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * euro / bitcoin).toFixed(7)}`
        }// EURO PARA BITCOIN

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`

            currencyValueTextTwo.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputSelectOne * bitcoin / euro)
        }// BITCOIN PARA EURO
    }

}

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
