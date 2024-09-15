import React, {useState,useEffect} from "react"
// import FormattedDate from "./FormattedDate"
import axios from "axios"
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast,setForecast] = useState(null)

  // Use effect allows you to run code after the component but if something changes after it's loaded
   useEffect(() => {
    if (props.coordinates) {
      let lat = props.coordinates.latitude;
      let lon = props.coordinates.longitude;
      let apiKey = "444t95o4afedabca0957fcb3605bfd54";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.coordinates]);
 

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    // console.log(response.data.daily)
  }

    if (loaded){
      return (<div className="WeatherForecast">
    <div className="container">
      <div className="row">
        {/* Very important to understand looping through in React */}
        {forecast.map(function(dailyForecast,index){

          if (index<5) {
            return<div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast}/>
        </div>
          }
           return null
        })}

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
