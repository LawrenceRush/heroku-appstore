import React from 'react';
import Store from './store/store'
import AppContainer from './components/AppListContainer'
import CartContainer from './components/CartContainer';
import Nav from "./components/NavBar"
import "./style.css"
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";




function App() {

  
  return (
    <div className="App">
      
      <Store>
      <Router>
      <Nav />
      
        <Switch>
        <Route path="/Cart"> <CartContainer /> </Route>
        <Route path="/">  <AppContainer/> </Route>
        </Switch>
        
        </Router>
        </Store>
      
    </div>
    
  );
}

export default App;
