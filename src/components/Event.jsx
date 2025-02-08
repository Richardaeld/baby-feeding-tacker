import PropTypes from 'prop-types';
import FeedingItem from "./EventItem";
import '../css/feeding.css';


export function Feeding({ feedings }) {
  return (
    <section className="event">
      {feedings.map(feeding =>
         <FeedingItem key={feeding.key} event={feeding} />)
      }
    </section>
  )
}

Feeding.propTypes = {
  feedings: PropTypes.arrayOf(
    PropTypes.shape({
      
    })
  )
}
