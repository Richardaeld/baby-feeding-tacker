import PropTypes from 'prop-types';
// import { Events } from '../components/Event.jsx'
import { EventItem } from '../components/EventItem'
import '../css/event.css';

export function History({ Events }) {

   const table = {
      days: 3,
      increment: {
         value: 15,
         units: 'minute',
      }
   }

   const date = new Date()
   console.log(date.getDate())
   console.log(date.getMonth())
// const test = createEl('div');
// const test = createEl('div');
  return (
    <section className="history">

      <div>
        <header>
            <div></div>
            <div>2025-02-12</div>
            <div>2025-02-13</div>
            <div>2025-02-14</div>
        </header>

        <div>
            <div>00:00</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div>01:00</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div>02:00</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div>23:00</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

      {/* {Events.map(event =>
         <EventItem key={event.key} event={event} />
      )} */}
   </section>
  );
}

History.propTypes = {

};