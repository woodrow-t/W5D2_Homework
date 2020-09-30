import React, { useState } from "react";
import Stocks from "./Stocks"
import Home from "./Home"
import About from "./About"
import "../styles.css"
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(null);
  const handleClick = (price) => {
    setPrice(price);
  };
  return (
    <div>
      <nav>  
        <Link to="/">
          <h1>iStocks</h1>
        </Link>

        <Link to="/Stocks">Stocks</Link>

        <Link to="/About">About</Link>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Stocks">
            <Stocks />
          </Route>
          
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;