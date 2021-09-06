import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  
} from "react-router-dom";



import Home from './Component/Home/Home'

function App() {
  return (
    
<div>
    <BrowserRouter>
    <Switch>
    
         
          <Route path="/">
              <Home></Home>
          </Route>


          
           

   
      
    </Switch>
    </BrowserRouter>
    </div>

  )
}

export default App;
