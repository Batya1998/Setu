import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  
} from "react-router-dom";



import Home from './Component/Home/Home'
import AllUsers from './Component/All Users/AllUsers'
import Dashaboard from './Component/Dashaboard/Dashaboard'
function App() {
  return (
    
<div>
    <BrowserRouter>
    <Switch>
    
         
          <Route path="/">
              <Home></Home>
          </Route>

          <Route path="/">
              <AllUsers></AllUsers>
          </Route>
          <Route path="/">
              <Dashaboard></Dashaboard>
          </Route>
          
          

   
      
    </Switch>
    </BrowserRouter>
    </div>

  )
}

export default App;
