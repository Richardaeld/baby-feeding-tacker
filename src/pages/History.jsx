import PropTypes from 'prop-types';
// import { Events } from '../components/Event.jsx'
import { EventItem } from '../components/EventItem'
import '../css/event.css';

export function History({ Events }) {
  return (
    <section className="history">
      {Events.map(event =>
         <EventItem key={event.key} event={event} />
      )}
   </section>
  );
}

History.propTypes = {

};