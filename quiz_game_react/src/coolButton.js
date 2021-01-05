import React from "react";
import "./coolButton.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function coolButton() {
  return (
    <div class="container">
        <button type="button" className="button">Hover me</button>
    </div>  
  );
}

export default coolButton;
