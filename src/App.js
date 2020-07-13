import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./components/Home";
import Happy from "./components/Happy";
import Bored from "./components/Bored";
import Sad from "./components/Sad";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Happy' exact component={Happy}></Route>
          <Route path='/Bored' exact component={Bored}></Route>
          <Route path='/Sad' exact component={Sad}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
