import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormInput ({ input, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label htmlFor={input.name}>
         <span>{capitalizeEveryFirstLetter(input.name)}</span>
         <input
            id={input.name}
            type="text"
            name={input.name}
            onChange={e => {
               setNewValue(e.target.value)
               setFormData(prevData => ({
                  ...prevData,
                  [input.name]: e.target.value
               }));
            }}
            value={newValue}
            autoComplete='off'
         />
      </label>
   )
}

FormInput.propTypes = {
   input: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
   }),
   setFormData:PropTypes.func
}