import React from 'react';
import {Link} from "react-router-dom";
import { Switch,Route,browserHistory, IndexRoute,BrowserRouter as Router ,HashRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
// import Main from "./routes.js"
// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       <Route path='/about' component={About}/>
//       <Route path='/contact' component={Contact}/>
//     </Switch>
//   </main>
// )
class App extends React.Component  {
    render() {
        return ( 
            <div className="App" >
                {/*<div className = "App-header" >
                    <img src = { logo } className = "App-logo" alt = "logo" / >
                    <h2> Welcome to React </h2> 
                </div> 
                <p className = "App-intro" >To get started, edit <code> src / App.js </code> and save to reload. </p>*/
            }
                <div>
                    <ul>
                        
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/nested">Home</Link></li>
                       
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div>
                        <h1>Hello World</h1>
                        {this.props.children}
                       
                    </div>
                </div>
             </div>
        );
    }
}

export default App;