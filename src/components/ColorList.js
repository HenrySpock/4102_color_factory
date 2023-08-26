import React from "react";
import { Link } from "react-router-dom";
import colorMap from '../constants/colorMap';

function ColorList({ colors }) {
  return (
    <div>
      <div>
        <Link to="/colors/new">Add New Color</Link>
      </div>
      <br></br>
      {colors.map((hex) => (
        <div key={hex}>
          <Link to={`/colors/${hex.slice(1)}`}>
              {Object.keys(colorMap).find(key => colorMap[key] === hex) || hex}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ColorList;
