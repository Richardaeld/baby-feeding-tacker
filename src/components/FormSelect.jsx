import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormSelect ({ select, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label htmlFor={select.name}>
         <span>{capitalizeEveryFirstLetter(select.name)}</span>
         <select 
            id={select.name}
            type="text"
            name={select.name}
            onChange={e => {
               setNewValue(e.target.value)
               setFormData(prevData => ({
                  ...prevData,
                  [select.name]: e.target.value
               }));
            }}
            value={newValue}
            autoComplete='off'
         >
            {select.enum.map(option => 
               <option key={crypto.randomUUID()} value={option.key}>{option.name}</option>
            )}
         </select>
      </label> 
   )
}

FormSelect.propTypes = {
   select: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      enum:PropTypes.arrayOf(
         PropTypes.shape({})
      )
   }),
   setFormData:PropTypes.func
}