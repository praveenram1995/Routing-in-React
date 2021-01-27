import React from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Signin from './Components/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/Home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
