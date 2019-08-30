import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PickDate(props) {
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <DatePicker selected={activeDate} onChange={date => setActiveDate(date)} />
  );
}

export default PickDate;
