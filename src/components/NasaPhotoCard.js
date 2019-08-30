import React from "react";
import { directive } from "@babel/types";
import styled from "styled-components";

const Title = styled.h2``;

// Styles for my Body
const Body = styled.div`
  height: 100%;
  background-color: rgba(123, 124, 209, 0.9);
`;

function NasaPhoto(props) {
  console.log(props);
  return (
    <>
      <Body>
        <Title>{props.title}</Title>
        <img src={props.url} />
        <p>{props.explanation}</p>
      </Body>
    </>
  );
}

export default NasaPhoto;
