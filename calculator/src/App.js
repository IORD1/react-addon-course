import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Calculator(){
  const [input,setInput] = useState('');
  const[result ,setRestult] = useState('');
  function handelInput(value){
    setInput(input + value);
  }
  function clearInput(){
    setInput("");
  }
  function backSpace(){
    let string =input.substring(0, input.length-1);
    setInput(string);
  }
  function ans(){
    setRestult(eval(input).toFixed(2));
  }

  return (
    <div className='button'>
      <div className='divider'>
        <input type="text" value={input} readOnly/>
        <input type="text" value={result} readOnly/>
      </div>
      
      <div className='divider'>
          <button className='buttons' onClick={()=>handelInput('1')}>1</button>
          <button className='buttons' onClick={()=>handelInput('2')}>2</button>
          <button className='buttons' onClick={()=>handelInput('3')}>3</button>
      </div>
      <div className='divider'>
          <button className='buttons' onClick={()=>handelInput('4')}>4</button>
          <button className='buttons' onClick={()=>handelInput('5')}>5</button>
          <button className='buttons' onClick={()=>handelInput('6')}>6</button>
      </div>
      <div className='divider'>
          <button className='buttons' onClick={()=>handelInput('7')}>7</button>
          <button className='buttons' onClick={()=>handelInput('8')}>8</button>
          <button className='buttons' onClick={()=>handelInput('9')}>9</button>
      </div>
      <div className='divider'>
          <button className='buttons' onClick={()=>handelInput('.')}>.</button>
          <button className='buttons' onClick={()=>handelInput('0')}>0</button>
      </div>
      <div className='divider'>
          <button className='buttons' onClick={()=>handelInput('-')}>-</button>
          <button className='buttons' onClick={()=>handelInput('+')}>+</button>
          <button className='buttons' onClick={()=>handelInput('*')}>*</button>
          <button className='buttons' onClick={()=>handelInput('/')}>/</button>
      </div>
      <div className='divider'>
          <button className='buttons' onClick={()=>clearInput()}>Clr</button>
          <button className='buttons' onClick={()=>backSpace()}>Bkp</button>
          <button className='buttons' onClick={()=>ans()}>=</button>
          <button className='buttons' onClick={()=>setRestult(eval(input))}>==</button>


      </div>
    </div>
  );
}

export default Calculator;