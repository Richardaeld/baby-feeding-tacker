import PropTypes from 'prop-types';

export function FormInput ({ formInput  }) {
   
   return (
      <label htmlFor={formInput.nameAttribute}>
         {formInput.nameDisplay}
         <input 
            type="text"
            name={formInput.nameAttribute}
         />
      </label>
   )
}

FormInput.propTypes = {
   formInput: PropTypes.arrayOf(
      PropTypes.shape({
         id:PropTypes.string.isRequired,
         nameAttribute:PropTypes.string.isRequired,
         nameDisplay:PropTypes.string.isRequired,
      })
   ).isRequired,
}