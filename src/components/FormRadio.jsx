import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormRadio (formInput, setFormData) {
   const [newValue, setNewValue] = useState("");

   console.log(formInput)
   console.log(formInput.name)

  return (
    <label>
         <span>{capitalizeEveryFirstLetter(formInput.name)}</span>
         {/* {formInput.radio.map(radio => {
            <input
               id={radio.name}
               type="radio"
               name={radio.name}
               onChange={e => {
                  setNewValue(e.target.checked)
                  setFormData(prevData => ({
                     ...prevData,
                     [radio.name]: e.target.checked
                  }))
               }}
               checked={newValue}
            />
         })} */}

    </label>
  );
}

FormRadio.propTypes = {

};