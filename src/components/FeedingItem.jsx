import PropTypes from 'prop-types';

export default function FeedingItem({ feeding }) {
  return (
      <div className="feeding-item">
         <div>
            <div>{feeding.name}</div>
            <div>{feeding.time}</div>
         </div>
         <div>
            <div>{feeding.consumed} oz.</div>
            <div>{feeding.extra_hungry ? "Extra Hungry" : ""}</div>
         </div>
         <div>{feeding.notes}</div>
      </div>
  )
}

FeedingItem.propTypes = {
   feeding: PropTypes.shape({
      name:PropTypes.string.isRequired,
      time:PropTypes.string.isRequired,
      notes:PropTypes.string.isRequired,
      consumed:PropTypes.number.isRequired,
      extra_hungry:PropTypes.bool.isRequired,
   }).isRequired
}