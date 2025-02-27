import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SolarSystem from "./components/SolarSystem";
import "./App.css";

function App() {
  const [speed, setSpeed] = useState(0.5);
  const [planetSize, setPlanetSize] = useState(1);
  const [sunGlow, setSunGlow] = useState(2);

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="header">Solar System</h1>
        <h4 className="hint-text">Click on a planet for info</h4>
        <Sidebar
          speed={speed}
          planetSize={planetSize}
          sunGlow={sunGlow}
          setSpeed={setSpeed}
          setPlanetSize={setPlanetSize}
          setSunGlow={setSunGlow}
        />
        <SolarSystem speed={speed} planetSize={planetSize} sunGlow={sunGlow} />
      </div>
    </div>
  );
}

export default App;
