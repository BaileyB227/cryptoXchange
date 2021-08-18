let apiKeyCrypto = 'fregfzsfixaw8mmf6bd7';

// Convert button, puts converted value in box and adds to local storage
$("#convertBtn").on("click", function(){
    convertOptions();
})

function convertOptions(){
    // Grabs the value of the selected options
    let $cryptoChoice = $('#cryptoOptions').val();
    let $currencyChoice = $('#currencyOptions').val();
    let cryptoURL = `https://api.lunarcrush.com/v2?data=meta&key=${apiKeyCrypto}&type=price&symbol=${$cryptoChoice}`

    fetch(cryptoURL)
    .then(headers => headers.json())
    .then(cryptoData => {
        let cryptoValue = cryptoData.data[0].price;
        console.log(cryptoValue)
        console.log($currencyChoice)
        let currencyURL = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=${$currencyChoice}&amount=${cryptoValue}`
        
        fetch(currencyURL, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "50a769f7fdmshb1669138dd5c7a6p123efejsnef1425783bd8",
		    "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
	        }
        })
        .then(headers => headers.json())
        .then(response => {let responseRate = response.rates

            // Copy this one for each currency
            if ($currencyChoice === "USD") {
                responseRate = responseRate.USD.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "EUR") {
                responseRate = responseRate.EUR.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "JPY") {
                responseRate = responseRate.JPY.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "GBP") {
                responseRate = responseRate.GBP.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "AUD") {
                responseRate = responseRate.AUD.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "CAD") {
                responseRate = responseRate.CAD.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "CHF") {
                responseRate = responseRate.CHF.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "CNY") {
                responseRate = responseRate.CNY.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "HKD") {
                responseRate = responseRate.HKD.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }
            if ($currencyChoice === "NZD") {
                responseRate = responseRate.NZD.rate_for_amount
                console.log(responseRate)
                $("#convertedValue").text(responseRate);
                $("#currencyChoice").text($currencyChoice);
                $("#cryptoChoice").text($cryptoChoice);
            }

        storeInfo($cryptoChoice, responseRate, $currencyChoice);
        }
            )
    })
}


function storeInfo($cryptoChoice, responseRate, $currencyChoice){
    let converts = $cryptoChoice + " is " + responseRate + " in "+ $currencyChoice
    let prevConverts = JSON.parse(localStorage.getItem('history')) || [] ;
    prevConverts.unshift(converts)
    if(prevConverts.length > 5) { 
        prevConverts.pop();
        }
    localStorage.setItem('history', JSON.stringify(prevConverts))
    displayHistory();
}

function displayHistory(){
    const historyArray = JSON.parse(localStorage.getItem('history'));
    
    $("#newest").text(historyArray[0]);
    $("#second").text(historyArray[1]);
    $("#third").text(historyArray[2]);
    $("#fourth").text(historyArray[3]);
    $("#fifth").text(historyArray[4]);
}

displayHistory();