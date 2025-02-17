import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { EventBlock } from '../components/EventBlock';
import { EventHeader } from '../components/EventHeader';
import { Modal } from '../components/Modal';

export function Home({ events, isModalOpen, openModal, closeModal, modalChildren, setModalChildren, form, addEvent, setEvents, redirectHome, setRedirectHome }) {
   // console.log(events)
   let
      contentDay,
      contentTime,
      previousDay,
      previousHour,
      currentDay,
      currentHour;

   const
      babies      = [],
      splitEvents = {};

   events.forEach(event => {
      const date = format(event.start_on, "yyyy/MM/dd HH");
      if (!splitEvents[date]) splitEvents[date] = {};
      if (!splitEvents[date][event.baby_id]) {
         splitEvents[date][event.baby_id] = [];
         if (!babies.includes(event.first_name)) babies.unshift(event.first_name)
      }
      splitEvents[date][event.baby_id].push(event)
   })

   setRedirectHome(false);

  return (
    <section className="home">
         <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalChildren={modalChildren} form={form} addEvent={addEvent} setEvents={setEvents} events={events} redirectHome={redirectHome} setRedirectHome={setRedirectHome} >
         </Modal>
      <div>
         <div className="event-block event-block-header">
            {babies.map(baby =>
               <EventHeader key={crypto.randomUUID()} name={baby}/>
            )}
         </div>
         {Object.entries(splitEvents).map(([date, babyobj]) => {
            contentTime = contentDay = '';
            [currentDay, currentHour]  = date.split(' ');

            if (previousDay !== currentDay) {
               const dayOfWeek =  new Date(currentDay).toLocaleDateString('en-US', { weekday: 'short' })

               contentDay  = <div className="new-day"><b>{currentDay} ({dayOfWeek})</b><div></div></div>;
               previousDay = currentDay
            }
            if (previousHour !== currentHour) {
               contentTime  = <div className="new-time"><b>{parseInt(currentHour) + 1}:00</b><div></div></div>;
               previousHour = currentHour
            }

            return (
               <span key={crypto.randomUUID()}>
                  {contentDay}
                  {contentTime}
                  <EventBlock key={crypto.randomUUID()} eventBlock={babyobj} date={date} isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} addEvent={addEvent} setEvents={setEvents}/>
               </span>
            )
         })}
      </div>
    </section>
  );
}

Home.propTypes = {
   events: PropTypes.arrayOf(
      PropTypes.shape({
         key         : PropTypes.string,
         amount      : PropTypes.number,
         baby_id     : PropTypes.number,
         birthday    : PropTypes.string,
         color       : PropTypes.string,
         dosage      : PropTypes.string,
         end_on      : PropTypes.string,
         event_id    : PropTypes.number,
         event_type  : PropTypes.string,
         feeding_type: PropTypes.string,
         first_name  : PropTypes.string,
         gender      : PropTypes.string,
         height      : PropTypes.number,
         last_name   : PropTypes.string,
         name        : PropTypes.string,
         note        : PropTypes.string,
         note_id     : PropTypes.number,
         start_on    : PropTypes.string,
         weight      : PropTypes.number,
      })
   ),
   isModalOpen     : PropTypes.bool,
   openModal       : PropTypes.func,
   closeModal      : PropTypes.func,
   modalChildren   : PropTypes.arrayOf(
      PropTypes.shape({})
   ),
   setModalChildren: PropTypes.func,
   form            : PropTypes.shape({}),
   addEvent        : PropTypes.func,
   setEvents       : PropTypes.func,
   redirectHome    : PropTypes.bool,
   setRedirectHome : PropTypes.func,
};