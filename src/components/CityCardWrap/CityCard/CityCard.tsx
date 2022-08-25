import React from "react";
import "./style.css";
import London from "../../../images/London.jpeg";

interface CityCardProps {
  name: string;
  count: number;
  image?:string
}



export default function CityCard(props: CityCardProps) {
  var style:any

  if(props.image){
    style={ background: "no-repeat center url(" + props.image + ")" }
  }else{
    style={ background: "no-repeat center url(" + London + ")" }

  }


  return (
    <div
      style={style}
      className="city-card"
    >
      <h3>{props.name}</h3>
      <h4>{props.count} properties</h4>
    </div>
  );
}
