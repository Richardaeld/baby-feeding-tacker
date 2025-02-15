import PropTypes from 'prop-types';
import { format } from 'date-fns';

// import { EventItem } from '../components/EventItem'
import { EventBlock } from '../components/EventBlock';
import { EventHeader } from '../components/EventHeader';
import { Modal } from '../components/Modal';
import { Routes, Route } from 'react-router-dom';

import { Navigate, useNavigate } from 'react-router-dom';

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
   // console.log(splitEvents)
   // Navigate('/addFeeding')
   setRedirectHome(false);

  return (
    <section className="home">

         <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalChildren={modalChildren} form={form} addEvent={addEvent} setEvents={setEvents} events={events} redirectHome={redirectHome} setRedirectHome={setRedirectHome} >

            {/* {console.log(addEvent)} */}
            {/* <h1>HELLO!</h1> */}
            {/* <button onClick={closeModal}>Close</button> */}
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

               contentDay = <div className="new-day"><b>{currentDay} ({dayOfWeek})</b><div></div></div>;
               previousDay = currentDay
            }
            if (previousHour !== currentHour) {
               contentTime = <div className="new-time"><b>{parseInt(currentHour) + 1}:00</b><div></div></div>;
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
         key       : PropTypes.string,
         baby_id   : PropTypes.number,
         // end_on    : PropTypes.string,
         event_type: PropTypes.string,
         first_name: PropTypes.string,
         // start_on  : PropTypes.string,
      })
   )
};