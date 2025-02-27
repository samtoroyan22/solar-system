import React, { useState } from "react";
import "./PlanetInfoModal.css";

const PlanetInfoModal = ({ isOpen, onClose, planet }) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  return (
    <div
      className={`modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{planet?.name}</h2>
        </div>
        <div className="modal-body">
          <img src={planet?.img} alt={planet?.name} className="modal-image" />
          <div className="info-container">
            <p>
              <strong>Diameter:</strong> <span>{planet?.diameter} km</span>
            </p>
            <p>
              <strong>Distance from Sun:</strong>{" "}
              <span>{planet?.distance} AU</span>
            </p>
            <p>
              <strong>Orbital Speed:</strong> <span>{planet?.speed} rad/s</span>
            </p>
            <p className="description">{planet?.description}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfoModal;
