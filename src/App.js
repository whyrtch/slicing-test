import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./component/Main";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={"/"} component={Main}/>
        </Switch>
      </Router>
  );
}

export default App;
