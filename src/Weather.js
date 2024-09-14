import React, {useState} from "react"
import axios from "axios"
import "./Weather.css"

export default function Weather(){
 
  const[weatherData,setWeatherData] = useState({ready:false})

  function Submitted(event){
    event.preventDefault()
  }

  // function NewCity(response){
  //   setCity(response.data.city)
  // }

  function displayWeather(response){
    console.log(response.data)
    setWeatherData({
      ready:true,
      temperature: parseInt(response.data.temperature.current),
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      description:response.data.condition.description
    })
  
  }
  

if (weatherData.ready){
    return <div className="Weather">

      
      <form>
        <div className="row">
          <div className="col-9">
                  <input className="form-control" onSubmit={Submitted} type="search" placeholder="Enter a city.."/>

          </div>
          <div className="col-3">
                  <input className="Button" type="submit" value="Search"/>

          </div>
        </div>

      </form>
      <h1>Bloemfontein, South Africa</h1>
      <div className="Description">
        <p>Friday, 14:23</p>
        <p className="text-capitalize">{weatherData.description}</p>
      </div>
        
      
      <div className="container Details">
        <div className="row">
          <div className="col-4 current">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
          <p><span className="CurrentTemp">{Math.round(weatherData.temperature)} <sup>&deg;</sup>C</span> </p>
          </div>
          <div className="col-6 phw">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}<sup>&deg;</sup>C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind {weatherData.wind}km/h</li>

            </ul>
          </div>
        </div>
      </div>

      </div>
} else{
  let city = "Bloemfontein"

  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=444t95o4afedabca0957fcb3605bfd54`
  axios.get(url).then(displayWeather)

  return "Loading"
}
 
}