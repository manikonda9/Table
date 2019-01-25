import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Table} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
