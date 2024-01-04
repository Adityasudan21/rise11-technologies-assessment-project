import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import MainPage from './Main_Page';

function App() {
  const [isNavOpen,setIsNavOpen]=useState(false);
  const Toggle = () =>{
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className="app">
      <Navbar isNavOpen={isNavOpen}/>
      <MainPage isNavOpen={isNavOpen} Toggle={Toggle}/>
    </div>
  );
}

export default App;
