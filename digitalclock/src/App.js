import logo from './logo.svg';
import './App.css';
import react, { useEffect } from 'react';
import {useState} from 'react'


function App() {

  const[time,setTime] = useState(new Date());

  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date());
    },1000);
    return () => clearInterval(interval);
  },[]);


  return (
    <div className="App">
      <h1>Digital Clock</h1><br></br>
      <h3>{time.toLocaleTimeString()}</h3>
      <div className='container'></div>
    </div>
  );
}

export default App;
