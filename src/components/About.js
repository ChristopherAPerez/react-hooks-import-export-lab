import React from "react";
import { image as image1 } from "/Users/chickngamer/react-hooks-import-export-lab/src/data/user.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image1} alt="I made this" />
    </div>
  );
}

export default About;
