import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#3498db");
  const [text, setText] = useState("I love frontend development!");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container text-center mt-5">
      <div
        className="banner p-5 text-white rounded"
        style={{ backgroundColor: bgColor }}
        data-aos="fade-up"
      >
        <h1>{text}</h1>
      </div>

      <div className="form mt-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Change Background Color:</label>
          <input
            type="color"
            className="form-control form-control-color"
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Change Banner Text:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new text"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
