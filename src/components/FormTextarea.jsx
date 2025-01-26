import PropTypes from 'prop-types';
import { capitalizeEveryFirstLetter } from './../js/general.js';

export function FormTextarea ({ textarea }) {

   return (
      <label htmlFor={textarea.name}>
         <span>{capitalizeEveryFirstLetter(textarea.name)}</span>
         <textarea name={textarea.name} id={textarea.name}></textarea>
      </label>
   )
}

FormTextarea.propTypes = {
   textarea: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
   }).isRequired
}