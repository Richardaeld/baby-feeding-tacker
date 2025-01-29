import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormCheckbox({ checkbox, setFormData }) {
   const [newValue, setNewValue] = useState("");

  return (
      <label htmlFor={checkbox.name}>
         <span>{capitalizeEveryFirstLetter(checkbox.name)}</span>
         <input 
            id={checkbox.name}
            type="checkbox"
            name={checkbox.name}
            onChange={e => {
               setNewValue(e.target.checked)
               setFormData(prevData => ({
                  ...prevData,
                  [checkbox.name]: e.target.checked
               }))
            }}
            checked={newValue}
         />
      </label>
  )
}

FormCheckbox.propTypes = {
   checkbox: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      checked:PropTypes.bool,
   }),
   setFormData: PropTypes.func
}