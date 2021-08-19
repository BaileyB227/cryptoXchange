let apiKeyCrypto = 'fregfzsfixaw8mmf6bd7';
let cryptoImage = document.getElementById("leftImage");
let currencyImage = document.getElementById("rightImage");
cryptoImage.setAttribute("src", "./assets/images/BTC.png");
currencyImage.setAttribute("src", "./assets/images/USD.png");


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
        
        
        cryptoImage.setAttribute("src", `./assets/images/${$cryptoChoice}.png`);

        fetch(currencyURL, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "50a769f7fdmshb1669138dd5c7a6p123efejsnef1425783bd8",
		    "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
	        }
        })
        .then(headers => headers.json())
        .then(response => {let responseRate = response.rates

            // Takes currency value, converts into USD
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

        
        currencyImage.setAttribute("src", `./assets/images/${$currencyChoice}.png`);

        storeInfo($cryptoChoice, responseRate, $currencyChoice);
        }
            )
    })
}

// Shows history of last 5 searches in local storage
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

//  Displays local storage search history
function displayHistory(){
    const historyArray = JSON.parse(localStorage.getItem('history'));
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");

    if(historyArray[1]){
        let img1Src = historyArray[0].split(" ")[0];
        img1.setAttribute("src", `./assets/images/${img1Src}.png`);
        $("#newest").text(historyArray[0]);    
    }
    if(historyArray[1]){
        let img2Src = historyArray[1].split(" ")[0];
        img2.setAttribute("src", `./assets/images/${img2Src}.png`);
        $("#second").text(historyArray[1]);
    }
    if(historyArray[2]){
        let img3Src = historyArray[2].split(" ")[0];
        img3.setAttribute("src", `./assets/images/${img3Src}.png`); 
        $("#third").text(historyArray[2]);
    }
    if(historyArray[3]){
        let img4Src = historyArray[3].split(" ")[0];
        img4.setAttribute("src", `./assets/images/${img4Src}.png`); 
        $("#fourth").text(historyArray[3]);
    }
    if(historyArray[4]){
        let img5Src = historyArray[4].split(" ")[0];
        img5.setAttribute("src", `./assets/images/${img5Src}.png`);
        $("#fifth").text(historyArray[4]);
    }    
}