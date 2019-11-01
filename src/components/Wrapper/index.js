//wraper for the 4 pages so you can switch pages
import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
