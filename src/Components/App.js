import React from "react";
import Home from './Home'
import OrderForm from './OrderForm';
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <nav className='home-header'>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
      <img
        className='home-image'
        src=''
        alt='pizza dish on a table'
      />
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={OrderForm} />


    </div >
  );
};
export default App;
