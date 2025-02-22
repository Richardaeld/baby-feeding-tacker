import PropTypes from 'prop-types';

export function EventHeader({name}) {
   return (
      <div className="event-name-header">
         <div>
            <div><b>{name}</b></div>
         </div>
      </div>
   );
}

EventHeader.propTypes = {
   name: PropTypes.string
};