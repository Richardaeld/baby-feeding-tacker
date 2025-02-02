import PropTypes from 'prop-types';
import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { FormSelect } from './FormSelect';
import { useState } from 'react';
import { FormRadio } from './FormRadio';

export function Form ({ form, addFeeding, feeding }) {

   const [formData, setFormData] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      // if (!Valid(e.target)) return // TODO
      addFeeding(formData);
   };

   const addClass = (addClass, e) =>  
      e.target.closest('button').classList.add(addClass);

   const removeClass = (removeClass, e) => 
      e.target.closest('button').classList.remove(removeClass);
   

   return (
      <form onSubmit={handleSubmit}>
         <h2>{form.header}</h2>
         <div>
            {form.inputs.map(input => {
               // console.log(input.type)
               switch (input.type) {
                  case 'textarea'      : return <FormTextarea key={input.key} textarea={input} setFormData={setFormData}/>
                  case 'input_checkbox': return <FormCheckbox key={input.key} checkbox={input} setFormData={setFormData}/>
                  case 'input'         :
                  case 'input_text'    : return <FormInput  key={input.key} input={input} setFormData={setFormData}/>
                  case 'select'        : return <FormSelect key={input.key} select={input} setFormData={setFormData} />
                  // case 'input_radio'   : return <FormRadio  key={input.key} formInput={input} setFormData={setFormData} />
               }
            })}
         </div>
         <div>
            <button 
               onMouseEnter={(e) => addClass('button-depressed', e)} 
               onMouseLeave={(e) => removeClass('button-depressed', e)} 
               className="button submit-button"
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