import React from "react";
import { username as username1, city as city1 } from "/Users/chickngamer/react-hooks-import-export-lab/src/data/user.js";

function Home() {
  return (
    <div id="home">
      <h1>
        {username1} is a Web Developer from {city1}
      </h1>
    </div>
  );
}

export default Home;