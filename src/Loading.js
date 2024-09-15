import React from "react";
import "./Loading.css"

import { FallingLines } from 'react-loader-spinner'
export default function Loading(){
  return <div>
    <FallingLines
  height="80"
  width="80"
  radius="9"
  color="blue"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  </div>
  
}
