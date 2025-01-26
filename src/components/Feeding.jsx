import FeedingItem from "./FeedingItem";

export function Feeding({ feedings }) {
  return (
    <section>
      {feedings.map(feeding => 
         <FeedingItem key={feeding.key} feeding={feeding} />)
      }
    </section>
  )
}
