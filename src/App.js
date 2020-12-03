import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Home from "./views/home";
import About from "./views/about";
import Product from "./views/product";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div style={{ "max-width": "1920px", margin: "0 auto" }}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
