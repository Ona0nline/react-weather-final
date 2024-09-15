import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

  function min(){
    let temp = `${Math.round(props.data.temperature.minimum)}`
    return <div>{temp}<sup>&deg;</sup>C</div>
  }

  
  function max(){
    let temp = `${Math.round(props.data.temperature.maximum)}`
    return <div>{temp}<sup>&deg;</sup>C</div>
  }

  function day(){
  let date = new Date(props.data.time * 1000)
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let day = days[date.getDay()]
  

  return day
  }


  return (
    <div>
  <div className="WeatherForecast-day">{day()}</div>
          <WeatherIcon code={props.data.condition.icon} size={35}/>
          <div className="WeatherForecast-temp">
            <span className="Min">{min()}</span> <span className="Max">{max()}</span>
            </div> 
            </div>)
}