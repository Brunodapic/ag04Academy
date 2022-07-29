import * as React from "react";
import './style.css'

export default function DisplayHeader(props:any) {
  return (
    <div className="MainWrapp" >{props.children}</div>
  );
}
