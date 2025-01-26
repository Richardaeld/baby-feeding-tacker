import PropTypes from 'prop-types';

export function FormInput ({ input  }) {
   


   return (
      <label htmlFor={input.name}>
         <span>{input.name}</span>
         <input 
            id={input.name}
            type="text"
            name={input.name}
         />
      </label>
   )
}

FormInput.propTypes = {
   input: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
   }).isRequired
}