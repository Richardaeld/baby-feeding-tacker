import PropTypes from 'prop-types';

import { EventItem } from '../components/EventItem'

export function Home({ events }) {

   console.log('Home', events)

  return (
    <section>
      {events.map(event =>{


         return <EventItem event={event}/>
      })}
    </section>
  );
}

Home.propTypes = {

};