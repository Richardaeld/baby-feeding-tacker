import PropTypes from 'prop-types';
import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { useState } from 'react';

export function Form ({ form, addFeeding, feeding }) {

   const [formData, setFormData] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      // if (!Valid(e.target)) return // TODO
      addFeeding(formData);
   } 

   return (
      <form onSubmit={handleSubmit}>
         <h2>{form.header}</h2>
         {form.inputs.map(input => {
            // console.log(input.type)
            switch (input.type) {
               case 'textarea'      : return <FormTextarea key={input.key} textarea={input} setFormData={setFormData}/>
               case 'input_checkbox': return <FormCheckbox key={input.key} checkbox={input} setFormData={setFormData}/>
               case 'input'         :
               case 'input_text'    : return <FormInput key={input.key} input={input} setFormData={setFormData}/>
            }
         })}

         <button>Submit</button>
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