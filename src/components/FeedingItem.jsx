
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
