import PropTypes, { arrayOf } from 'prop-types';
import { format } from 'date-fns';

// import { EventItem } from '../components/EventItem'
import { EventBlock } from '../components/EventBlock';
import { EventHeader } from '../components/EventHeader';

export function Home({ events }) {
   let
      contentDay,
      contentTime,
      previousDay,
      previousHour,
      currentDay,
      currentHour;

   const
      babies      = [],
      splitEvents = {};

   events.forEach(event => {
      const date = format(event.start_on, "yyyy/MM/dd HH");
      if (!splitEvents[date]) splitEvents[date] = {};
      if (!splitEvents[date][event.baby_id]) {
         splitEvents[date][event.baby_id] = [];
         if (!babies.includes(event.first_name)) babies.unshift(event.first_name)
      }
      splitEvents[date][event.baby_id].push(event)
   })
   console.log(splitEvents)

  return (
    <section className="home">
      <div>
      <div className="event-block event-block-header">
         {babies.map(baby => {
            return <EventHeader key={crypto.randomUUID()} name={baby}/>
         })}
      </div>
      {Object.entries(splitEvents).map(([date, babyobj]) => {
         contentTime = contentDay = '';
         [currentDay, currentHour]  = date.split(' ');

         if (previousDay !== currentDay) {
            contentDay = <div className="new-day"><b>{currentDay} ()</b><div></div></div>;
            previousDay = currentDay
         }
         if (previousHour !== currentHour) {
            contentTime = <div className="new-time"><b>{parseInt(currentHour) + 1}:00</b><div></div></div>;
            previousHour = currentHour
         }

         console.log(babies)

         return (
            <>
               {contentDay}
               {contentTime}
               <EventBlock key={crypto.randomUUID()} eventBlock={babyobj} date={date}/>
            </>
         )
      })}
      </div>
    </section>
  );
}

Home.propTypes = {
   events: PropTypes.arrayOf()
};