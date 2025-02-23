import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from '../../js/general.ts';
import { useState } from 'react';

export function FormInput ({ inputData, setFormData }) {
   const [newValue, setNewValue] = useState("");

   return (
      <fieldset className={inputData.className}>
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <label htmlFor={inputData.name}>
            <input
               id={inputData.name}
               type={inputData.inputType??'text'}
               {...(inputData.step ? {step: inputData.step} : {})}
               {...(inputData.min ? {min: inputData.min} : {})}
               {...(inputData.max ? {max:inputData.max} : {})}
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
      </fieldset>
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