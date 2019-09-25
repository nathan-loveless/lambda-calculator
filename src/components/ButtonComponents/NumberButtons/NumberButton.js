import React from "react";
import '../../../components.css';

export const NumberButton = (props) => {
  console.log(props.number);

  if(props.number === '0')
        {
          return ( <> { <button className='zero-display numbers-display'>{props.number}</button> } </> );
        }
  return (
    <>
      {         
        <button className='numbers-display'>{props.number}</button>
      }
    </>
  );
};
