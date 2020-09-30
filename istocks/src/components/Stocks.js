import React from "react";
import StockData from "../stock-data"

function Stocks() {
    let list = StockData.map(item => {
        return (
            <div className="stocks" key={item.stocks}>
                <p>
                    <Link to={"/price/" + item.stocks}>{item.name}</Link>:{" "}
                </p>
            </div>
        );
    });
    return (
        <div>
            <h1>Stocks Page</h1>
            <div>{list}</div>;
        </div>
    )
}

export default Stocks