import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormTextarea ({ textarea, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label htmlFor={textarea.name}>
         <span>{capitalizeEveryFirstLetter(textarea.name)}</span>
         <textarea 
            name={textarea.name}
            id={textarea.name}
            onChange={e => {
               setNewValue(e.target.value)
               setFormData(prevData => ({
                  ...prevData,
                  [textarea.name]: e.target.value
               }))
            }}
            value={newValue}
         ></textarea>
      </label>
   )
}

FormTextarea.propTypes = {
   textarea: PropTypes.shape({
      id: PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
   }),
   setFormData:PropTypes.func
}