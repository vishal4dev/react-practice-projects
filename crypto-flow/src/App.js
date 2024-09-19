import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Coindetails from './components/Coindetails';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/coins' element ={<Coins/>} />
        <Route path='/exchanges' element ={<Exchanges/>} />
        <Route path='/coin/:id' element ={<Coindetails/>} />
      </Routes>
    </Router>  
  );
}

export default App