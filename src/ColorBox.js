import React from "react";
function ColorBox(props) {
  const {color} = props;
  return (
    <div style={{backgroundColor : color}}></div>
  );
}

export default ColorBox;
