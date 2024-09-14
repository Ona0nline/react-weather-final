import React from "react";

export default function WeatherTemperature(props) {
   return (
    <div className="WeatherTemperature">
      <strong>{Math.round(props.celsius)}</strong><sup>&deg;C</sup>
    </div>
  );
}