import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from './components/Products';
import ProductItem from './components/ProductItem';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRoute() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={Products}/>
          <Route path="/products/:id" component={ProductItem}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRoute;
