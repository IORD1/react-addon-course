import React,{useState,useEffect} from 'react';
import './form.css'
function Form(){
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');

  function handelSubmit(event){
    event.preventDefault();
    console.log('count ', name);
    console.log('email ',email);
  }
  
  return (
    <div className="Form">
        <form onSubmit={handelSubmit}>
          <label>Name : </label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <br></br>
          <label>Email : </label>
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br></br>
          <button type='submit'>Submit</button>
        </form>
      
    </div>
  );
}

export default Form;


