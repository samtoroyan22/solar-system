import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Settings, ChevronsLeft, ChevronsRight } from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({
  speed,
  setSpeed,
  setPlanetSize,
  setSunGlow,
  planetSize,
  sunGlow,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
      </button>

      {isOpen && (
        <div className="controls">
          <h2>
            <Settings size={20} /> Settings
          </h2>

          <div className="control-group">
            <h4>Скорость: {speed}</h4>
            <Slider
              min={-50}
              max={50}
              step={0.5}
              value={speed}
              onChange={(e, val) => setSpeed(val)}
              className="custom-slider" // Добавляем класс для стилизации
            />
          </div>

          <div className="control-group">
            <h4>Размер планет: {planetSize}</h4>
            <Slider
              min={0.5}
              max={2}
              step={0.05}
              value={planetSize} // Используем value вместо defaultValue для синхронизации
              onChange={(e, val) => setPlanetSize(val)}
              className="custom-slider"
            />
          </div>

          <div className="control-group">
            <h4>Яркость Солнца: {sunGlow}</h4>
            <Slider
              min={0}
              max={10}
              step={0.1}
              value={sunGlow} // Используем value вместо defaultValue
              onChange={(e, val) => setSunGlow(val)}
              className="custom-slider"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
