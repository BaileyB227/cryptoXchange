let apiKeyCurrency = '4b83b17cefa1b951b3da100dbb82ba7e';
let apiKeyCurrencyURL = `http://data.fixer.io/api/latest?access_key=${apiKeyCurrency}`
let apiKeyCrypto = 'fregfzsfixaw8mmf6bd7';
let apiKeyCryptoURL = `https://api.lunarcrush.com/v2?data=assets&key=${apiKeyCrypto}`

let apiFetch = 'http://data.fixer.io/api/latest?access_key=4b83b17cefa1b951b3da100dbb82ba7e'
let apiFetch2 = 'https://api.lunarcrush.com/v2?data=assets&key=fregfzsfixaw8mmf6bd7&symbol=DOGE'

fetch (apiFetch)
.then(headers => headers.json())
.then(data => {console.log(data)})

fetch (apiFetch2)
.then(headers => headers.json())
.then(data => {console.log(data)})