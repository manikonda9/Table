import React, { Component } from 'react';
import './App.css';
import ProductTable from "./components/tableView/ProductTable";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ProductTable} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
