class stockMarketExchange {

    getStockMarketData(){
        return `<note>
        <to>Data</to>
        <from>1</from>
        <heading>Facebook</heading>
        <body>3.01</body>
        </note>`
    }

    xml(){
        // fetch the stock market data
        return this.getStockMarketData()
    }
}

class chartsData {
    constructor(stockMarketExchange){
        this.stockMarketExchange = stockMarketExchange;
    }
    getData(){
        // return charts data in json
        this.stockMarketExchange.json()
    }
}

class Adapter {
    constructor(stockMarketExchange) {
        this.stockMarketExchange = stockMarketExchange;
    }
    xmlToJSON(){
        // convert xml data to JSON
    }
    json(){
        return xmlToJSON(this.stockMarketExchange.xml())
    }

}

const stockMarket = new stockMarketExchange();

const stockMarketAdapter = new Adapter(stockMarket);

const chartsData = new chartsData(stockMarketAdapter);
