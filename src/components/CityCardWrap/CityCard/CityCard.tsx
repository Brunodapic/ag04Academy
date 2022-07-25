import * as React from "react";
import "./style.css";

interface CityCardProps{
  name: string,  
	count: number  
}

export default function CityCard(props:CityCardProps) {
  const image="../../images/"+props.name+'.jpeg'
  return(
    
  <div  
    style={{ background: "no-repeat center url("+image+")" }}
    className="CityCard">
    Card Card
    <h3>{props.name}</h3>
    <h4>{props.count} properties</h4>
    </div>
  )
}
