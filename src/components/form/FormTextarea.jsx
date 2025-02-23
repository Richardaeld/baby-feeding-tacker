import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from '../../js/general.ts';
import { useState } from 'react';

export function FormTextarea ({ inputData, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label htmlFor={inputData.name}>
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <textarea 
            name={inputData.name}
            id={inputData.name}
            onChange={e => {
               setNewValue(e.target.value)
               setFormData(prevData => ({
                  ...prevData,
                  [inputData.name]: e.target.value
               }))
            }}
            value={newValue}
         ></textarea>
      </label>
   )
}

FormTextarea.propTypes = {
   inputData: PropTypes.shape({
      id: PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
   }),
   setFormData:PropTypes.func
}