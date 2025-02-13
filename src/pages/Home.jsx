import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { EventItem } from '../components/EventItem'

export function Home({ events }) {

   console.log('Home', events)
   let date, time, hour, minute, content;


  return (
    <section className="home">
      {events.map(event => {
         content = "";
         const data = {
            start_time:   format(event.start_on, 'HH:mm'),
            start_date:   format(event.start_on, 'MM/dd'),
            start_day:    format(event.start_on, 'EEE'),
            start_hour:   format(event.start_on, 'HH'),
            start_minute: format(event.start_on, 'mm'),
            end_time:     format(event.end_on  , 'HH:mm'),
            end_date:     format(event.end_on  , 'MM/dd'),
         }
         // console.log('EventItem', data)

         if (!date || date !== data.start_date) {
            date   = data.start_date;
            hour   = data.start_hour;
            content = <div className="new-day"><b>{data.start_date} ({(data.start_day)})</b><div></div></div>;
         }
         if (hour !== data.start_hour) {
            hour = data.start_hour;
            content = <div className="new-time"><b>{data.start_hour}:00</b><div></div></div>;
         }

         // SPLIT COLUMNS BY BABY!!

         return (
            <span key={event.key}>
               {content}
               <EventItem key={event.key} event={event}/>
            </span>
         )
      })}
    </section>
  );
}

Home.propTypes = {

};