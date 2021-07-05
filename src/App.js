import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import MainPage from "./MainPage"
import OperatorApp from "./Operator"
import NotFoundPage from "./error"


class App extends Component {
 render(){
   return(
    <Router>
      <Switch>
        <Route exact path="/qna" component={MainPage} />
        <Route exact path="/operator" component={OperatorApp} />
        <Route exact path="/error" component={NotFoundPage} />
        <Redirect to="/error" /> 
      </Switch>
      </Router>
   )
 }
}

export default App;
