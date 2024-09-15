import React, {useState} from "react"
import axios from "axios"
import "./Weather.css"
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"

export default function Weather(props){
  
  const[city,setCity] = useState(props.defaultCity)
  const[weatherData,setWeatherData] = useState({ready:false})
  function displayWeather(response){
    setWeatherData({
    
      ready:true,
      coordinates: response.data.coordinates,
      temperature: parseInt(response.data.temperature.current),
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      description:response.data.condition.description,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      icon:response.data.condition.icon,
    })
  
  }
  function Search(){

  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=444t95o4afedabca0957fcb3605bfd54`
  axios.get(url).then(displayWeather)

  }

  // useEffect(() => {
  //   Search(); // Only call Search when the component mounts or city changes
  // }, [city]);

  function handleSubmit(event){
    event.preventDefault()
    // Handle making the api call
    Search()
    console.log(city)
  }

  function handleCityChange(event){
    setCity(event.target.value)
  
  }
if (weatherData.ready){

  
    return <div className="Weather">

      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
                  <input  onChange={handleCityChange} value={city} className="form-control" type="search" placeholder="Enter a city.."/>

          </div>
          <div className="col-3">
                  <input className="Button" type="submit" value="Search"/>

          </div>
        </div>

      </form>

      <WeatherInfo info={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates}/>

      </div>
} else{
  Search()
  return "Loading"
}
 
}