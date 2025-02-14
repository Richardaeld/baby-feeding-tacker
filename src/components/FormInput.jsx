import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormInput ({ inputData, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label htmlFor={inputData.name}>
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <input
            id={inputData.name}
            type="text"
            name={inputData.name}
            onChange={e => {
               setNewValue(e.target.value)
               setFormData(prevData => ({
                  ...prevData,
                  [inputData.name]: e.target.value
               }));
            }}
            value={newValue}
            autoComplete='off'
         />
      </label>
   )
}

FormInput.propTypes = {
   inputData: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
   }),
   setFormData:PropTypes.func
}