import { Switch,Route,browserHistory, IndexRoute,BrowserRouter as Router ,HashRouter} from 'react-router-dom';
import React from "react";
import App from './App';
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={About}/>
      <Route path='/schedule' component={Contact}/>
    </Switch>
  </main>
)