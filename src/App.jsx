import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import Banner from "./Components/banner";
import Form from "./Components/form";

function App() {
  // Load from localStorage or use default values
  const [bgColor, setBgColor] = useState(localStorage.getItem("bgColor") || "#041825");
  const [pageBgColor, setPageBgColor] = useState(localStorage.getItem("pageBgColor") || "#f7fbff");
  const [text, setText] = useState(localStorage.getItem("text") || "The Joy of Reading: My Escape");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sync body background with selected page background color
  useEffect(() => {
    document.body.style.backgroundColor = pageBgColor;
  }, [pageBgColor]);

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("pageBgColor", pageBgColor);
    localStorage.setItem("text", text);
  }, [bgColor, pageBgColor, text]);

  return (
    <div className="text-center mt-5 main-container">
      <Banner 
        bgColor={bgColor} 
        bgImage="https://i.pinimg.com/736x/de/b8/da/deb8da4c68cc148b0aecf8f63a955a63.jpg" 
        text={text}  
      />
      <Form setBgColor={setBgColor} setText={setText} setPageBgColor={setPageBgColor} />
    </div>
  );
}

export default App;

