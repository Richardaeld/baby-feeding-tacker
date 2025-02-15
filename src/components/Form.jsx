import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



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
      // console.log(e.target)
      // console.log('------------------------------->', formData)
      const data = {}
      for (const [key, value] of formData.entries()) {
         console.log(key, value);
         if (key === 'first_name' && value === '') {
            console.log(value)
            return;
         }
         if (key === 'event_type' && value === '') {
            console.log(value)
            return;
         }


         if(key === 'event_type') {
            data[key] = value.toUpperCase()

         } else {

            data[key] = value;
         }

      }
      data['start_on'] = new Date().toISOString();
      data['end_on']   = new Date().toDateString();
      addEvent(setEvents, data);
      // closeModal();
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
         {/* {console.log('----------------------------', redirect)} */}
         <h2>{isModalOpen ? 'Edit Feeding' : form.header}</h2>
         {/* {console.log(isModalOpen)} */}
         <div>
            {form.inputs.map(input => {
               // console.log(input)
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