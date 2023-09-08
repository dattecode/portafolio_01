import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Intro />} />
    </Routes>
  );
}

export default App;
