import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Slider from "../pages/Slider"
import Research from "../pages/Research";
import Manufacture from "../pages/Manufacture"; 
import Planning from "../pages/Planning"
import Designing from "../pages/Designing"
import Sales from "../pages/Sales";
// import Intro from "../pages/"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Slider/>} />
      <Route path="/Research" element={<Research />} />
      <Route path="/Planning" element={<Planning/>}></Route>
      <Route path="/Designing" element={<Designing/>}></Route>
      <Route path="/Manufacture" element={<Manufacture />} />
      <Route path="/Sales" element={<Sales />} />
  
    </Routes>
  );
};

export default Routers;
