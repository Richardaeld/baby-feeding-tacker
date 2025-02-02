import PropTypes from 'prop-types';
import { useState } from 'react';

import '../css/form.css';

import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { FormSelect } from './FormSelect';
import { FormRadio } from './FormRadio';

export function Form ({ form, addFeeding, feeding }) {

   const [formData, setFormData] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      // if (!Valid(e.target)) return // TODO
      addFeeding(formData);
   };

   const addClass = (addClass, closestTag, e) =>
      e.target.closest(closestTag).classList.add(addClass);

   const removeClass = (removeClass, closestTag, e) =>
      e.target.closest(closestTag).classList.remove(removeClass);

   const removeClassRadio = (removeClasses, closestTag, e) => {
      const
         radioContainer = e.target.closest("div.input-radio-buttons"),
         radioButtons   = radioContainer.querySelectorAll('label');

      radioButtons.forEach(button => {
         removeClasses.map(removeClass => {
            if (!button.querySelector('input').checked) button.classList.remove(removeClass)
         })
      })
   }


   return (
      <form onSubmit={handleSubmit}>
         <h2>{form.header}</h2>
         <div>
            {form.inputs.map(input => {
               // console.log(input)
               switch (input.type) {
                  case 'textarea'      : return <FormTextarea key={input.key} inputData={input} setFormData={setFormData}/>
                  case 'input_checkbox': return <FormCheckbox key={input.key} inputData={input} setFormData={setFormData}/>
                  case 'input'         :
                  case 'input_text'    : return <FormInput  key={input.key}   inputData={input} setFormData={setFormData}/>
                  case 'select'        : return <FormSelect key={input.key}   inputData={input} setFormData={setFormData} />
                  case 'input_radio'   : return <FormRadio  key={input.key}   inputData={input} setFormData={setFormData} addClass={addClass} removeClass={removeClassRadio} />
               }
            })}
         </div>
         <div className="submit-div">
            <button
               onMouseEnter={(e) =>    addClass('button-depressed','button', e)}
               onMouseLeave={(e) => removeClass('button-depressed','button', e)}
               className="button button-clickable"
            >
               <div>Submit</div>
            </button>
         </div>
      </form>
   )
}

Form.propTypes = {
   form: PropTypes.shape({
      header:PropTypes.string,
      inputs:PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.string,
            name:PropTypes.string,
            type:PropTypes.string,
         })
      )
   }),
   addFeeding: PropTypes.func,
   feeding: PropTypes.arrayOf(
      PropTypes.shape({})
   ),
}