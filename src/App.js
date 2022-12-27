// Modules:
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

//CSS:
import "./App.css";

//Components:
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="app-routes-container">
        <Router>
          <ErrorBoundary FallBackComponent={Home}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </div>
    </div>
  );
};

export default App;
