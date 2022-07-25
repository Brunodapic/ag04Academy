import * as React from "react";
import "./style.css";

interface CityCardProps{
  name: string,  
	count: number  
}

export default function CityCard(props:CityCardProps) {
  return <div className="CityCard">
    Card
    <h3>{props.name}</h3>
    <h4>{props.count} properties</h4>
    </div>;
}
