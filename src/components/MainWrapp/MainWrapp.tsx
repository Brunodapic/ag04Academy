import React from "react";
import "./style.css";

export default function MainWrapp(props: {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <div className="main-wrapp">{props.children}</div>;
}
