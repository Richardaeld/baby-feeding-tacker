import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormRadio ({ inputData, setFormData, removeClass, addClass }) {
   const [newValue, setNewValue] = useState("");

// console.log(inputData)

   return (
      <fieldset className={`${inputData.className} input-radio`}>
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <div className="input-radio-buttons">
            {inputData.radio.map(radio => {
               const hasInputDataOnClick = inputData.events && inputData.events.onClick
               return (
                  <label
                     key={radio}
                     className={`button button-clickable ${radio.toUpperCase().replace(' ', '_')}`}
                     htmlFor={`${inputData.name}-${radio}`}
                     onClick={(e)      =>  {
                        // @ Add remove button animation class
                        addClass('input-radio-selected'  ,'label', e);
                        requestAnimationFrame(() => removeClass(['input-radio-selected', 'button-depressed'],'label', e));

                        // @ Attach FormData onClick event(s)
                        if(hasInputDataOnClick) inputData.events.onClick.map(event => event(e));

                        // @ Set prop values
                        setNewValue(e.target.value)
                        setFormData(prevData => ({
                           ...prevData,
                           [inputData.name]: e.target.value
                        }))
                     }}
                     onMouseEnter={(e) =>    addClass('button-depressed','label', e)}
                     onMouseLeave={(e) => removeClass(['button-depressed','input-radio-selected'],'label','div.input-radio-buttons', e)}
                  >
                     <input
                        id={`${inputData.name}-${radio}`}
                        type="radio"
                        name={inputData.name}
                        value={radio}
                     />
                     <p>{radio}</p>
                  </label>
               )
            })}
         </div>
      </fieldset>
  );
}

FormRadio.propTypes = {
   inputData: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      radio:PropTypes.arrayOf(
         PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      ),
      events:PropTypes.shape ({
         onClick:PropTypes.arrayOf(
            PropTypes.func
         )
      })
   }),
   setFormData:PropTypes.func,
   addClass:PropTypes.func,
   removeClass:PropTypes.func,
};