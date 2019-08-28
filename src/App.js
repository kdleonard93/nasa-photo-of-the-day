import React, { useState, useEffect } from "react";
import "./App.css";
import NasaPhoto from "./components/NasaPhotoCard";
import axios from "axios";

function App(props) {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          🚀
        </span>
        !
      </p>
      <NasaPhoto />
    </div>
  );
}

export default App;
