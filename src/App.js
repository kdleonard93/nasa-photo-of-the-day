import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App(props) {
  const [nasaPhoto, setNasaPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod")
      .then(response => {
        setNasaPhoto(response.data);
        console.log(`Response: ${response.data}`);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
    </div>
  );
}

export default App;
