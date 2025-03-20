import React from "react";
import "./Banner.css";

function Banner({ bgColor, text }) {
  return (
    <div className="banner-container text-center" style={{ backgroundColor: bgColor }} data-aos="fade-up">
      <img src={'/abstract.png'} alt="Banner" className="banner-image1" />
      <img src={'/abstract.png'} alt="Banner" className="banner-image" />
      <h1 className="banner-title">{text}</h1>
      <p className="banner-description">
There’s something magical about getting lost in a good book. The moment I flip open a page, the world around me fades, and I step into a new reality—one filled with adventure, knowledge, or deep human emotions. Whether it's fiction or non-fiction, each book offers a doorway into different perspectives, ideas, and experiences that expand my mind in ways nothing else can.  

Reading isn't just a pastime for me; it's a way of life. It fuels my imagination, sharpens my thinking, and even brings a sense of calm after a long day. The beauty of words, the power of storytelling, and the endless pursuit of learning make every reading experience deeply fulfilling. With every book I read, I grow, and that’s what keeps me coming back for more.  

Beyond personal enjoyment, reading also connects me to others. Whether it’s discussing a thought-provoking novel, sharing book recommendations, or exploring different viewpoints through literature, books have a way of building bridges. They help me see the world through different lenses, making me more empathetic and open-minded. In every way, reading is both a journey and a gift—one I cherish deeply.</p>
    </div>
  );
}

export default Banner;
