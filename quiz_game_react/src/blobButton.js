import React from "react";
import "./blobButton.css";

function blobButton() {
  return (
    <div className= "blobButton">
            <button class="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            HOVER ME
        </button>
    </div>
  );
}

export default blobButton;
