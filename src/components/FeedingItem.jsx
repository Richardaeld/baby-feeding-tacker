import PropTypes from 'prop-types';

export default function FeedingItem({ feeding }) {
   console.log('feeding',feeding)
  return (
      <div className="feeding-item">
         <div>
            <div>{feeding.name}</div>
            <div>{feeding.time}</div>
         </div>
         <div>
            <div>{feeding.feeding_type}</div>
            <div>{feeding.breast}</div>

            <div>{feeding.bottle}</div>
            <div>{feeding.extra_hungry ? "Extra Hungry" : ""}</div>
         </div>
         <div>{feeding.notes}</div>
      </div>
  )
}

FeedingItem.propTypes = {
   feeding: PropTypes.shape({
      name:PropTypes.string,
      time:PropTypes.string,
      notes:PropTypes.string,
      consumed:PropTypes.number,
      extra_hungry:PropTypes.bool,
   })
}