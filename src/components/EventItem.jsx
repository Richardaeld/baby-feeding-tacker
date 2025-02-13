import PropTypes from 'prop-types';
import { format } from 'date-fns';

export function EventItem({ event }) {
   // console.log('EventItem.jsx',event)

{/* <i class="fa-solid fa-circle-plus"></i> -- add */}

   const fontAwesomeMap = {
      BATH: [
         "fa-solid fa-bath",
         "fa-solid fa-shower",
      ],
      DIAPER: [
         "fa-solid fa-baby",
         "fa-solid fa-toilet",
         "fa-solid fa-toilet-paper",
      ],
      FEEDING:[
         "fa-solid fa-drumstick-bite",
         // "fa-solid fa-bottle-water",
         // "fa-solid fa-bottle-droplet",
      ],
      GROWTH: [
         "fa-solid fa-tape",
         "fa-solid fa-toilet-paper",
      ],
      MEDICATION:[
         "fa-solid fa-stethoscope",
         "fa-solid fa-pump-medical",
         "fa-solid fa-tablets",
         "fa-solid fa-prescription",
         "fa-solid fa-pills",
      ],
      NIGHT_CHECK: [
         "fa-regular fa-moon",
      ],
      PUMPING:[
         "fa-solid fa-gas-pump",
         "fa-solid fa-person-breastfeeding",
      ],
      TEMPERATURE:[
         "fa-solid fa-temperature-three-quarters",
      ],
      TUMMY_TIME: [
         "fa-solid fa-baby",
      ],
   };

   // console.log(event.event_type)


  return (
      <div className={`event-item ${event.event_type}`}>
         <div>
            <div><i className={fontAwesomeMap[event.event_type]?.[0]}></i></div>
            {/* <div><b>{event.name}</b></div> */}
            <div><b>{event.first_name}</b></div>
            {/* <div>{format(event.start_on, 'MM/dd HH:mm')}</div> */}
            <div>{format(event.start_on, 'HH:mm')}</div>
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