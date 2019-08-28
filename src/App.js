import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./components/NasaPhotoCard";

function App(props) {
  const [nasaPhoto, setNasaPhoto] = useState([]);
  const [data, setData] = useState({});

useEffect(() => {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=Hazl0FJIBuk0P2EKP10s11GYecRfGejGLStOODxT"
    )
    .then(response => {
      console.log(response.data);
      setNasaPhoto(response.data);
      setData(response.data);
    });
}, [])


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
      <NasaPhoto title={data.title} url={data.url} explanation={data.explanation} />
    </div>
  );
}

export default App;
