import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "blue", "green", "yellow", "orange", "red"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "blue";
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
