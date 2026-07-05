import React from 'react';

function About() {
  return (
    <div className="main">
      <div className="about">
        <h1 id="about-btn">About us</h1>

        <div className="container2">
          <div className="video">
            <video src="/WhatsApp Video 2025-08-22 at 18.07.38_674eb9bf.mp4" loop muted autoPlay></video>

            <h2>Best Flower Shop</h2>
          </div>

          <div className="about2">
            <h1>Why choose us ?</h1>

            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque similique quasi nam modi...
            </p>

            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque similique quasi nam modi...
            </p>

            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;