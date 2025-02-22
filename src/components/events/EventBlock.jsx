import PropTypes from 'prop-types';
import { EventItem } from './EventItem';
// import { format } from 'date-fns';

export function EventBlock({ eventBlock, isModalOpen, openModal, closeModal }) {

   // console.log(eventBlock)

   return (
      <div className="event-block">
         {Object.entries(eventBlock).map(([key, events]) => (
            <div key={crypto.randomUUID()}>
               {events.map(event => <EventItem key={crypto.randomUUID()} event={event} isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>)}
            </div>
         ))}
      </div>
   )

}

EventBlock.propTypes = {
   eventBlock: PropTypes.shape({}),
   isModalOpen: PropTypes.bool,
   openModal: PropTypes.func,
   closeModal: PropTypes.func,
};