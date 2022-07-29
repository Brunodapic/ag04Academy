import * as React from "react";
import "./style.css";

export default function DisplayHeader(props: {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <div className="MainWrapp">{props.children}</div>;
}
