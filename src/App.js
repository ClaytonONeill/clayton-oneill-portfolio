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
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <ErrorBoundary FallBackComponent={Home}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
