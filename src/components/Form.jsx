import PropTypes from 'prop-types';
import { FormInput } from './FormInput'
export function Form ({ form }) {

   return (
      <form>
         <h2>{form.header}</h2>
         {form.inputs.map(input => {
            switch (input.input) {
               
               case 'input': 
               default     : return <FormInput key={input.id} formInput={input}/>
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
            input:PropTypes.string.isRequired,
         })
      )
   })
}