import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';
import { useState } from 'react';

export function FormRadio ({ inputData, setFormData, removeClass, addClass }) {
   const [newValue, setNewValue] = useState("");

   return (
      <label className="input-radio">
         <span>{capitalizeEveryFirstLetter(inputData.name)}</span>
         <div className="input-radio-buttons">
            {inputData.radio.map(radio => {
               return (
                  <label
                     key={radio}
                     className="button button-clickable"
                     htmlFor={`${inputData.name}-${radio}`}
                     onClick={(e)      =>  {
                        addClass('input-radio-selected'  ,'label', e);
                        requestAnimationFrame(() => {
                           removeClass(['input-radio-selected', 'button-depressed'],'label', e);
                        });
                     }}
                     onMouseEnter={(e) =>    addClass('button-depressed','label', e)}
                     onMouseLeave={(e) => removeClass(['button-depressed','input-radio-selected'],'label', e)}
                  >
                     <input
                        id={`${inputData.name}-${radio}`}
                        type="radio"
                        name={inputData.name}
                        onChange={e => {
                           setNewValue(e.target.checked)
                           setFormData(prevData => ({
                              ...prevData,
                              [radio.name]: e.target.checked
                           }))
                        }}
                        value={radio}
                        // checked={newValue}
                     />
                     <p>{radio} oz</p>
                  </label>
               )
            })}
         </div>
      </label>
  );
}

FormRadio.propTypes = {
   inputData: PropTypes.shape({
      id:PropTypes.string,
      name:PropTypes.string,
      type:PropTypes.string,
      radio:PropTypes.arrayOf(
         PropTypes.number
      )
   }),
   setFormData:PropTypes.func,
   addClass:PropTypes.func,
   removeClass:PropTypes.func,
};