import PropTypes from 'prop-types';
import FeedingItem from "./EventItem";
import '../css/event.css';



// display 


export function Events({ feedings }) {
  return (
    <section className="event">
      {feedings.map(feeding =>
         <FeedingItem key={feeding.key} event={feeding} />)
      }
    </section>
  )
}

Events.propTypes = {
  feedings: PropTypes.arrayOf(
    PropTypes.shape({
      
    })
  )
}
