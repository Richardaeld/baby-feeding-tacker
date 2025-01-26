import PropTypes from 'prop-types';
import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';

export function Form ({ form }) {

   return (
      <form>
         <h2>{form.header}</h2>
         {form.inputs.map(input => {
            console.log(input.type)
            switch (input.type) {
               case 'textarea': return <FormTextarea key={input.key} textarea={input}/>
               case 'input_checkbox': return <FormCheckbox key={input.key} checkbox={input}/>


               case 'input':
               case 'input_text': return <FormInput key={input.key} input={input}/>
               // default     : 
            }
         })}

         <button>Submit</button>
      </form>
   )
}

Form.propTypes = {
   form: PropTypes.shape({
      header:PropTypes.string.isRequired,
      inputs:PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
         })
      )
   })
}