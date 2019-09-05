import React from 'react';
import logo from './logo.svg';
import { Switch,Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/test" component={Test} />
    <Route exact path="/test/:id" component={TestId} />
    <Route exact path="/check" component={Check} />
    <Route component={NoMatch} /> */}
  </Switch>
  );
}

export default App;
