import React, { useState, useEffect } from "react";
import axios from "axios";
import { directive } from "@babel/types";

function NasaPhoto(props) {
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
    <>
      <div>Hello</div>
    </>
  );
}

export default NasaPhoto;
