import PropTypes from 'prop-types';

export function FormTextarea ({ textarea }) {

   return (
      <label htmlFor={textarea.name}>
         <span>{textarea.name}</span>
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