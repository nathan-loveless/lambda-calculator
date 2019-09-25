import React from "react";

export const SpecialButton = (props) => {
  return (
    <>
      <button className='specials-display'>{props.special}</button>
    </>
  );
};
