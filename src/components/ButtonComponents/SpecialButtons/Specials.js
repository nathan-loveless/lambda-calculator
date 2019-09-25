import React, {useState} from "react";

import {SpecialButton} from './SpecialButton.js'
//Import your array data to from the provided data file
import {specials} from '../../../data.js'

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecialState] = useState(specials)

  return (
    <div className='numbers-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       special.map(element => <SpecialButton special={element}/>)
       }
    </div>
  );
};
