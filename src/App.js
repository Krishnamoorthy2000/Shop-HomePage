import React from 'react';
import './App.css';
import Card from './Components/card';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <nav>
        <h3>Start Bootstrap</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
           <select>
            <option value="">Shop</option>        
            <option value="option1">All products</option>
            <option value="option2">Popular items</option>
            <option value="option3">New arrivels</option>
           </select>
          </li>
        </ul>
        <div className='card'>
         Card {count}
        </div>
      </nav>
      <div className='header'>
      <h1>Shop in style</h1>
      <h4>With this shop hompeage template</h4>      
      </div>
      <Card setCount={setCount} count={count} />
      <footer>Copyright © Your Website 2023</footer>
    </div>
    
  );
}

export default App;
