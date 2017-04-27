import React from 'react';
import ReactDOM from 'react-dom';
import { Route,      browserHistory, IndexRoute,BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import './index.css';

ReactDOM.render(
  (
    <Router>
    <App>
     {//<Route path="/" component={App}> </Route>
    }
    
         <Route path="/home" component={Home} />
         <Route path="/nested" component={App} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         
     
    </App>
   </Router>
),
  document.getElementById('root')
);
