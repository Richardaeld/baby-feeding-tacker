import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormSelect ({ inputData, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <fieldset className={inputData.className}>
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <label htmlFor={inputData.name}>
            <select
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
            >
               {inputData.enum.map(option =>
                  <option key={crypto.randomUUID()} value={option.key}>{option.name}</option>
               )}
            </select>
         </label>
      </fieldset>

   )
}

FormSelect.propTypes = {
   inputData: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      enum:PropTypes.arrayOf(
         PropTypes.shape({})
      )
   }),
   setFormData:PropTypes.func
}