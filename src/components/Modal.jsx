import PropTypes from 'prop-types';
import '../css/Modal.css';
import '../css/form.css';

import { Form } from './form/Form';

export function Modal({ modalChildren, isModalOpen, closeModal, children, form, addEvent, setEvents, events, redirectHome, setRedirectHome }) {
   if (!isModalOpen) return null;

   return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>X</button>
          {<Form form={form} addEvent={addEvent} setEvents={setEvents} events={events} isModalOpen={isModalOpen} redirectHome={redirectHome} setRedirectHome={setRedirectHome} closeModal={closeModal}/>}
        </div>
      </div>
   );
}

Modal.propTypes = {
  isModalOpen     : PropTypes.bool,
  openModal       : PropTypes.func,
  closeModal      : PropTypes.func,
  modalChildren   : PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  setModalChildren: PropTypes.func,
  form            : PropTypes.shape(
    
  ),
  addEvent        : PropTypes.func,
  setEvents       : PropTypes.func,
  redirectHome    : PropTypes.bool,
  setRedirectHome : PropTypes.func,
};