import React, { useState, useEffect } from "react";
import "./Form.css";

function Form({ setBgColor, setText, setPageBgColor }) {
  // Load from localStorage or use default values
  const [tempBgColor, setTempBgColor] = useState(localStorage.getItem("bgColor") || "#041825");
  const [tempPageBgColor, setTempPageBgColor] = useState(localStorage.getItem("pageBgColor") || "#f7fbff");
  const [tempText, setTempText] = useState(localStorage.getItem("text") || "");

  useEffect(() => {
    // Set initial values to match stored values
    setBgColor(tempBgColor);
    setPageBgColor(tempPageBgColor);
    setText(tempText);
  }, []);

  const handleApplyChanges = () => {
    setBgColor(tempBgColor);
    setPageBgColor(tempPageBgColor);
    setText(tempText || "I love frontend development!");

    // Save to localStorage
    localStorage.setItem("bgColor", tempBgColor);
    localStorage.setItem("pageBgColor", tempPageBgColor);
    localStorage.setItem("text", tempText || "I love frontend development!");
  };

  return (
    <div className="container mt-4">
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Banner Color:</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={tempBgColor}
            onChange={(e) => setTempBgColor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Page Color:</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={tempPageBgColor}
            onChange={(e) => setTempPageBgColor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Banner Text:</label>
          <input
            type="text"
            className="form-control"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            placeholder="Enter new text"
          />
        </div>

        <button className="btn apply-btn" onClick={handleApplyChanges}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default Form;
