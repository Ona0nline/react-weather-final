import React from "react"
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"
// import WeatherForecast from "./WeatherForecast"

export default function WeatherInfo(props){

  return (<div>
    <h1>{props.info.city}</h1>
      <div className="Description">
        <p><FormattedDate date={props.info.date}/></p>
        <p className="text-capitalize">{props.info.description}</p>
      </div>
        
      
      <div className="container Details">
        <div className="row">
          <div className="col-4 current">
            <div className="float-left">
              <WeatherIcon code={props.info.icon} size={90} />
            </div>
            <div><span className="CurrentTemp">
               <WeatherTemperature celsius={props.info.temperature} />
            </span>
             
            </div>


          </div>

          <div className="col-6 phw">
            <ul>
              <li>Feels like: {Math.round(props.info.feelsLike)}<sup>&deg;</sup>C</li>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind {props.info.wind}km/h</li>

            </ul>
          </div>
        </div>
      </div>

    
  </div>)
}