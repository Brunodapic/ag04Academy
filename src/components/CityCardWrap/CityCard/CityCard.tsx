import * as React from "react";
import "./style.css";
import London from "../../../images/London.jpeg";

interface CityCardProps {
  name: string;
  count: number;
}

export default function CityCard(props: CityCardProps) {
  return (
    <div
      style={{ background: "no-repeat center url(" + London + ")" }}
      className="CityCard"
    >
      <h3>{props.name}</h3>
      <h4>{props.count} properties</h4>
    </div>
  );
}
