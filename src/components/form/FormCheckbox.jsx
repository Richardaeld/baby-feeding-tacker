import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from '../../js/general.ts';
import { useState } from 'react';

export function FormCheckbox({ inputData, setFormData, addClass, removeClass}) {
   const [newValue, setNewValue] = useState("");

   const toggleInput = (toggleClass, closestTag, e) => {
      requestAnimationFrame(() => {
         const target = e.target.closest(closestTag);
         const bool = target.querySelector('input').checked
         console.log(bool)
         bool
            ? target.classList.add(toggleClass)
            : target.classList.remove(toggleClass);

      })
   }

  return (
   <fieldset className={`input-checkbox-buttons  ${inputData.className}`}>
      <span style={{visibility:'hidden'}}>{capitalizeEveryFirstLetter(inputData.name)}</span>
      <label
         className={`button button-clickable`}
         htmlFor={inputData.name}
         onMouseEnter={(e) =>    addClass('button-depressed','label', e)}
         onMouseLeave={(e) => removeClass(['button-depressed','input-radio-selected'],'label', 'fieldset.input-checkbox-buttons', e)}
         onClick={(e)      => toggleInput('input-radio-selected', 'label', e)}
      >
         {/* <span>{capitalizeEveryFirstLetter(inputData.name)}</span> */}
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
         <p>{capitalizeEveryFirstLetter(inputData.name)}</p>
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