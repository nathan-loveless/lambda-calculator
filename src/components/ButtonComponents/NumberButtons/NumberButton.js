import React from "react";
import '../../../components.css';

export const NumberButton = (props) => {
  console.log(props.number);
  return (
    <>
      {
        <button className='numbers-display'>{props.number}</button>
      }
    </>
  );
};
