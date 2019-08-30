import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


function PickDate(props) {
  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <DatePicker dateFormat={moment(props.activeDate).format("YYYY-MM-DD")} selected={activeDate} onChange={date => setActiveDate(date)} />
  );
}

export default PickDate;
