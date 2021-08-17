let apiKeyCurrency = '4b83b17cefa1b951b3da100dbb82ba7e';
let apiKeyCurrencyURL = `http://data.fixer.io/api/latest?access_key=${apiKeyCurrency}&base=USD`
let apiKeyCrypto = 'fregfzsfixaw8mmf6bd7';
let apiKeyCryptoURL = `https://api.lunarcrush.com/v2?data=assets&key=${apiKeyCrypto}`

let apiFetch = 'http://data.fixer.io/api/latest?access_key=4b83b17cefa1b951b3da100dbb82ba7e&base=USD'
let apiFetch2 = 'https://api.lunarcrush.com/v2?data=meta&key=fregfzsfixaw8mmf6bd7&type=price&symbol=ETH'

fetch (apiFetch)
.then(headers => headers.json())
.then(data => {console.log(data)})

fetch (apiFetch2)
.then(headers => headers.json())
.then(crypto => {console.log(crypto.data[0].price)})

// Convert button, puts converted value in box and adds to local storage
$("#convertBtn").on("click", function(){
    convertOptions();
})

function convertOptions(){
    // Grabs the value of the selected options
    let $cryptoChoice = $('#cryptoOptions').val();
    let $currencyChoice = $('#currencyOptions').val();
    let cryptoURL = `https://api.lunarcrush.com/v2?data=meta&key=${apiKeyCrypto}&type=price&symbol=${$cryptoChoice}`
    let currencyURL = `https://currency-converter5.p.rapidapi.com/currency/convert`

    fetch(cryptoURL)
    .then(headers => headers.json())
    .then(cryptoData => {
        let cryptoValue = cryptoData.data[0].price;
        console.log(cryptoValue)
        console.log($currencyChoice)
        
        fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=${$currencyChoice}&amount=${cryptoValue}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "50a769f7fdmshb1669138dd5c7a6p123efejsnef1425783bd8",
		    "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
	        }
        })
        .then(headers => headers.json())
        .then(response => {let responseRate = response.rates

            // Copy this one for each currency
            if ($currencyChoice === "EUR") {
                responseRate = responseRate.EUR.rate_for_amount
                console.log(responseRate)
            }
        }
            )
    })
}