import React, {useState} from "react"
import WeatherIcon from "./WeatherIcon"
import axios from "axios"
import "./WeatherForecast.css"

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast,setForecast] = useState(null)
 

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

    if (loaded){
      return (<div className="WeatherForecast">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Saturday</div>
          <WeatherIcon code="shower-rain-day" size={35}/>
          <div className="WeatherForecast-temp">
            <span className="Min">{forecast[0].temperature.minimum}<sup>&deg;</sup>C</span> | <span className="Max">31<sup>&deg;</sup>C</span>
            </div>
          
        </div>      
        

      </div>
    </div>
  </div>)
    }else{

      let lat = props.coordinates.latitude;
      let long = props.coordinates.longitude;

      let url = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${long}&key=444t95o4afedabca0957fcb3605bfd54`;
      axios.get(url).then(handleResponse)

      return null

      
    }
      
}
