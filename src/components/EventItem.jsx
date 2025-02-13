import PropTypes from 'prop-types';
import { format } from 'date-fns';

export function EventItem({ event }) {
   // console.log('EventItem.jsx',event)
  return (
      <div className={`event-item ${event.event_type}`}>
         <div>
            {/* <div><b>{event.name}</b></div> */}
            <div><b>{event.first_name}</b></div>
            <div>{format(event.start_on, 'MM/dd HH:mm')}</div>
         </div>
         {/* <div>
            <div>{event.feeding_type}</div>
            <div>{event.breast}</div>
            <div>{event.bottle}</div>
         </div>
         <div>
            <div>{event.extra_hungry ? "Extra Hungry" : ""}</div>
         </div>
         <div>{event.notes}</div> */}
      </div>
  )
}

// EventItem.propTypes = {
//    event: PropTypes.shape({
//       name:PropTypes.string,
//       time:PropTypes.string,
//       notes:PropTypes.string,
//       consumed:PropTypes.number,
//       extra_hungry:PropTypes.bool,
//    })
// }