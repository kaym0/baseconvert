import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Binary from "../Pages/Binary";
import Decimal from "../Pages/Decimal";
import Hex from "../Pages/Hex";
import Octal from "../Pages/Octal";
import Home from "../Pages/Binary";
import Navbar from "../Components/Navbar";
class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/binary" component={Binary} />
            <Route path="/decimal" component={Decimal} />
            <Route path="/hexidecimal" component={Hex} />
            <Route path="/octal" component={Octal} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
