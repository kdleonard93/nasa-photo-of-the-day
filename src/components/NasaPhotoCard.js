import React, { useState, useEffect } from "react";
import { directive } from "@babel/types";

function NasaPhoto(props) {
  console.log(props);
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <img src={props.img} />
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default NasaPhoto;
