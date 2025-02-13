import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { EventItem } from '../components/EventItem'

export function Home({ events }) {

   console.log('Home', events)
   let date, time;


  return (
    <section className="home">
      {events.map(event =>{
         const data = {
            start_time: format(event.start_on, 'MM/dd'),
            start_date: format(event.start_on, 'MM/dd'),
            start_day:  format(event.start_on, 'EEE'),
            end_time:   format(event.end_on  , 'HH:mm'),
            end_date:   format(event.end_on  , 'HH:mm'),
         }
         console.log('EventItem', data)

         if (!date || date !== data.start_date) {
            date = data.start_date;
            time = data.start_time;
            return (
               <>
                  <div className="new-day"><b>{data.start_date} ({(data.start_day)})</b><div></div></div>
                  <EventItem event={event}/>
               </>
            )
         }

         return <EventItem event={event}/>
      })}
    </section>
  );
}

Home.propTypes = {

};