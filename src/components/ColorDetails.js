import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import colorMap from '../constants/colorMap';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();  
  const hexColor = `#${color}`;
  const colorName = Object.keys(colorMap).find(key => colorMap[key] === hexColor) || hexColor;

  if (!colors.includes(hexColor)) {
    navigate("/colors");
    return null;
  }

  return (
    <div style={{ backgroundColor: hexColor, height: "100vh", width: "100%" }}>
      <h1>This is {colorName}.</h1>
      <h1>Isn't it beautiful?</h1>
      <button onClick={() => navigate("/colors")}>Go Back</button>
    </div>
  );
}

export default ColorDetails;
