import React,{useState,useEffect} from 'react';
import './weather.css';
const Weather=() => {
  const [city,setCity] = useState(null);
  const[search,setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchapi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ search }&units=metric&appid=5de95f00374eae199e67feffb5a05265`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      
      setCity(resJson.main);
    };
    fetchapi();
    console.log(city.temp)
    if(city.temp > 29.0){
      document.getElementById("app").style = "background : linear-gradient(black,yellow)";
    }else if(city.temp < 29.0 & city.temp > 5.0){
      document.getElementById("app").style = "background : linear-gradient(black,lightgreen)";
    }else if(city.temp < 5.0){
      document.getElementById("app").style = "background : linear-gradient(black,lightblue)";
    }
  },[search])
  
  return (
    <div className="Appu" id="app">
      <div id='container'>
      <div>
        {!city?(
          <h2>Not Found</h2>
        ):(
          <div className='info'>
            <p>City : {search}</p>
            <p>Temperature : {city.temp}</p>
            <p>MinTemp : {city.temp_min}</p>
            <p>MaxTemp : {city.temp_max}</p>

            {console.log(city)}
          </div>
        )}
              
        <input type="search" name="search" id='search' onChange={(event) => {setSearch(event.target.value)}}></input>

      </div>
      </div>
      
    </div>
  );
}

export default Weather;


