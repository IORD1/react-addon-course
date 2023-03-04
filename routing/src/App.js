import './App.css';
import React from 'react';
import Resume from './components/Resume';
import Calculator from './components/Calculator';
import {Route, Routes} from "react-router-dom";
import {Link} from 'react-router-dom';
import Form from './components/form';
import Weather from './components/Weather';

function Apps() {
  return (
    <div className="Apsp">
      <div className='navbar'>
      <Link to={'/Resume'} className="Links">
        <p>Resume</p>
      </Link>
      <Link to={'/Calculator'} className="Links">
        <p>Calculator</p>
      </Link>
      <Link to={'/'} className="Links">
        <p>HomePage</p>
      </Link>
      <Link to={'/Form'} className="Links">
        <p>Clock</p>
      </Link>
      <Link to={'/Weather'} className="Links">
        <p>Weather</p>
      </Link>
      </div>


    <div className='contentss'>

      <Routes>
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Form" element={<Form />} />
          <Route path='/Weather' element={<Weather />} />

        </Routes>
    </div>
    </div>
  );
}

export default Apps;
