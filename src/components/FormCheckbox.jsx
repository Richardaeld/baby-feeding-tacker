import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';

export function FormCheckbox({ checkbox }) {
  return (
      <label htmlFor={checkbox.name}>
         <span>{capitalizeEveryFirstLetter(checkbox.name)}</span>
         <input 
            id={checkbox.name}
            type="checkbox"
            name={checkbox.name}
            checked={checkbox.checked}
         />
      </label>
  )
}

FormCheckbox.propTypes = {
   checkbox: PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      checked:PropTypes.bool.isRequired,
   }).isRequired
}