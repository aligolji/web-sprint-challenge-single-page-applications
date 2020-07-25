import React from "react";
import Home from './Home'
import OrderForm from './OrderForm';
import { Route, Link } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <nav className='home-header'>
        <h1>EAT ZA PIZZA</h1>
        <div className='nav-links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/pizza'>Order</Link>
        </div>
      </nav>
      <img
        className='home-image'
        src=''
        alt='pizza dish on a table'
      />
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={OrderForm} />


    </div>
  );
};
export default App;
