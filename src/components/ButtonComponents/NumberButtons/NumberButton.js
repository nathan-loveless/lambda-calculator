import React from "react";

export const NumberButton = (props) => {
  console.log(props.number);
  return (
    <>
      {
        <button>{props.number}</button>
      }
    </>
  );
};
