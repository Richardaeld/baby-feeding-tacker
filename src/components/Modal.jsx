import PropTypes from 'prop-types';
import '../css/Modal.css';
import '../css/form.css';

import { Form } from '../components/Form';

export function Modal({ modalChildren, isModalOpen, closeModal, children, form, addEvent, events }) {
   if (!isModalOpen) return null;

   return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>X</button>
          {<Form form={form} addFeeding={addEvent} feeding={events} isModalOpen={isModalOpen}/>}
        </div>
      </div>
   );
}

Modal.propTypes = {

};