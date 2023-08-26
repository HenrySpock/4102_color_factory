import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import NewColorForm from "./components/NewColorForm"; 
import colorMap from './constants/colorMap';

function App() {
  const initialColors = Object.values(colorMap);
  const [colors, setColors] = useState(initialColors);


  const addColor = (color) => {
    setColors([color, ...colors]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="*" element={<ColorList colors={colors} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
