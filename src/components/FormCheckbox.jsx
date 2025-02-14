import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormCheckbox({ inputData, setFormData }) {
   const [newValue, setNewValue] = useState("");

  return (
   <fieldset className={inputData.className}>
      <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
      <label htmlFor={inputData.name}>

         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <input
            id={inputData.name}
            type="checkbox"
            name={inputData.name}
            onChange={e => {
               setNewValue(e.target.checked)
               setFormData(prevData => ({
                  ...prevData,
                  [inputData.name]: e.target.checked
               }))
            }}
            checked={newValue}
         />
      </label>
   </fieldset>

  )
}

FormCheckbox.propTypes = {
   inputData: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      checked:PropTypes.bool,
   }),
   setFormData: PropTypes.func
}