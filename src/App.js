// Modules:
import React from "react";
import { Routes, Route } from "react-router-dom";

//Styles:

//Components:
import NavBar from "./Components/NavBar.js";
import HomeContent from "./Components/HomeContent.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
