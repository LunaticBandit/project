import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './routes/inicio';


export default function App() {
  return (

      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
}



