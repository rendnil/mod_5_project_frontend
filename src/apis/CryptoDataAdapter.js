//adapter to fetch cryptocurrency price data

const DATA_LIMIT = 500
const BASE_MARKET_DATA_ENDPOINT = `${process.env.REACT_APP_CRYPTO_DATA_API}/pricemultifull?fsyms=BTC,ETH,BCH,LTC,XRP&tsyms=USD`

export default class CryptoDataAdapter{

  //method to fetch historical price data
  static getHistoricalPriceData(symbol){

  //limiting data to last 500 points
    let endPoint = `${process.env.REACT_APP_CRYPTO_DATA_API}/histoday?fsym=${symbol}&tsym=USD&limit=${DATA_LIMIT}`
    return fetch(endPoint)
    .then(r => r.json())
  }

  //method to fetch initial price data for day
  static getBaseMarketData(){
    return fetch(BASE_MARKET_DATA_ENDPOINT)
    .then(r => r.json())
  }
}
