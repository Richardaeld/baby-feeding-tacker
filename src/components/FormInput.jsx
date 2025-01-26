import PropTypes from 'prop-types';

export function FormInput ({ formInput  }) {
   
   

   return (
      <label htmlFor={formInput.name}>
         <span>{formInput.name}</span>
         <input 
            id={formInput.name}
            type="text"
            name={formInput.name}
         />
      </label>
   )
}

FormInput.propTypes = {
   formInput: PropTypes.arrayOf(
      PropTypes.shape({
         id:PropTypes.string.isRequired,
         name:PropTypes.string.isRequired,
         inputType:PropTypes.string.isRequired,
      })
   ).isRequired,
}