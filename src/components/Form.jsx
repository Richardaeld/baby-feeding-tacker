import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



import '../css/form.css';

import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { FormSelect } from './FormSelect';
import { FormRadio } from './FormRadio';

export function Form ({ form, addEvent, setEvents, feeding, isModalOpen, redirectHome, setRedirectHome, closeModal }) {

   const [formData, setFormData] = useState("");


   const handleSubmit = (addEvent, e) => {
      e.preventDefault();
      // if (!Valid(e.target)) return // TODO
      const formData = new FormData(e.target);
      const data = {}
      let invalid = false;
      for (const [key, value] of formData.entries()) {
         // console.log(key, value);
         if (invalid) return

         switch (key) {
            case 'first_name':
               if (value === '') invalid = true;
               break;

            case 'event_type':
               if (value === '') invalid = true;
               data[key] = value.toUpperCase()
               return;

            default:
               data[key] = value;
         }
      }
      if (invalid) return

      data['start_on'] = new Date().toISOString();
      data['end_on']   = new Date().toDateString();
      addEvent(setEvents, data);
      if(closeModal) closeModal();
      setRedirectHome(true)
   };

   const addClass = (addClass, closestTag, e) =>
      e.target.closest(closestTag).classList.add(addClass);

   const removeClass = (removeClass, closestTag, e) =>
      e.target.closest(closestTag).classList.remove(removeClass);

   const removeClassRadio = (removeClasses, closestTag, container, e) => {
      let radioContainer = e.target.closest(container);
      const radioButtons   = radioContainer.querySelectorAll('label');

      radioButtons.forEach(button => {
         removeClasses.map(removeClass => {
            if (!button.querySelector('input').checked) button.classList.remove(removeClass)
         })
      })
   }


   return (
      <form onSubmit={(e) => handleSubmit (addEvent, e)}>
         {redirectHome && <Navigate to='/' />}
         <h2>{isModalOpen ? 'Edit Feeding' : form.header}</h2>
         <div>
            {form.inputs.map(input => {
               switch (input.type) {
                  case 'textarea'      : return <FormTextarea key={input.key} inputData={input} setFormData={setFormData}/>
                  case 'input_checkbox': return <FormCheckbox key={input.key} inputData={input} setFormData={setFormData} addClass={addClass} removeClass={removeClassRadio}/>
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