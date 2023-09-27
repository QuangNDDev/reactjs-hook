import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "black", "blue", "yellow"];
  const randomIndex = Math.trunc(Math.random() * 5);
  //Math.random() se return ve mot so thap phan tu 0 den 1 (luon luon nho hon 1)
  // *5 se la mot so thap phan nhan cho 5 ket qua se luon luon nho hon 5
  //Math.trunc se la ham lay phan nguyen
  return COLOR_LIST[randomIndex];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const innitColor = localStorage.getItem("box_color") || "deeppink";
    return innitColor;
  });

  const handleBoxClick = () => {
    //get random color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
