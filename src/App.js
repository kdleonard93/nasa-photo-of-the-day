import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import NasaPhoto from "./components/NasaPhotoCard";
import PickDate from "./components/DatePicker";

function App(props) {
  const [data, setData] = useState({});

  // useEffect for fetching APOD
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Hazl0FJIBuk0P2EKP10s11GYecRfGejGLStOODxT&date=2019-03-23"
      )
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <PickDate />

      <NasaPhoto
        title={data.title}
        url={data.url}
        explanation={data.explanation}
      />
    </div>
  );
}

export default App;
