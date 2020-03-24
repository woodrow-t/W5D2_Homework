# Bonus: Stock Trader Live

[Solution code can be found here.](https://git.generalassemb.ly/ga-wdi-exercises/react-router-lab/tree/solution-routing-apis


In this portion of the lab, your stock tracking app will be communicating with the following API:

- [https://financialmodelingprep.com](https://financialmodelingprep.com/developer/docs/most-actives-stock-market-data-free-api/)

 - 10 most active stocks: https://financialmodelingprep.com/developer/docs/most-actives-stock-market-data-free-api/
          - link to returned data: https://res.cloudinary.com/jeslan/image/upload/v1566571371/Project%201/Screen_Shot_2019-08-23_at_10.41.57_AM_ywmr9e.png
  - All stocks: https://financialmodelingprep.com/developer/docs/stock-market-quote-free-api/
          - link to returned data: https://res.cloudinary.com/jeslan/image/upload/v1566571381/Project%201/Screen_Shot_2019-08-23_at_10.42.17_AM_fs3ng2.png


## Instructions

Your finished app should be reasonably styled. A bootstrap theme has already been provided so use it to make your site neat and organized. You should also add the following features:


### Dashboard (`/stocks`)

Instead of listing the hard-coded stocks this page should retrieve all stocks from the the API.


### Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`) should be pulled it live using the API.


### Bonus: Search (`/search`)

#### Update Navigation

Add a "Search" link to the navigation bar.

#### Search for a Stock

If a user visits `/search` or clicks on "Search" in the navigation bar, they should be directed to a search page with a single-input form. If a user submits a stock symbol (e.g., `AAPL`) through the form, a call will be made to the external API you've chosen, Markit On Demand or Alpha Vantage.

If the API call is successful, the app should display the name and symbol of that stock below the search form. To the right of this information, there should be a "Track Stock" button.
