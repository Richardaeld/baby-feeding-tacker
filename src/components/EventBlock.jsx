import PropTypes from 'prop-types';
import { EventItem } from './EventItem';
import { format } from 'date-fns';

export function EventBlock({ eventBlock }) {

   return (
      <div className="event-block">
         {Object.entries(eventBlock).map(([key, events]) => (
            <div key={crypto.randomUUID()}>
               {events.map(event => <EventItem key={event.key} event={event} />)}
            </div>
         ))}
      </div>
   )

}

EventBlock.propTypes = {

};