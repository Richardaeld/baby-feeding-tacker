export function capitalizeEveryFirstLetter (string) {
   return string.replaceAll("_", " ").split(" ").map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}


export async function fetchEvents(http, method) {
   try {
     const response =  await fetch (http, {
         method: method,
         headers: {
            'Content-Type':'application/json',
         }
     })
     if (!response.ok) throw new Error("Network error");
     return await response.json();
   } catch (error) {
     console.error("FETCH BROKEN ", error)
   }
 }


export async function displayEvents(http, method) {
  return await fetchEvents(http, method);
}


export function addEvent(setEvent, event) {
  // console.log('newfeeding', event)
  setEvent(feedings => [
    ...feedings, {
      key:crypto.randomUUID(),
      first_name:event.first_name,
      name: event.event_type,
      event_type: event.event_type,
      time: event.start_on,
      time_end:event.end_on,
      // key:feeding.key,
      // name: feeding.name,
      // breast: feeding.breast,
      // time:format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
      // bottle:feeding.bottle,
      // feeding_type: feeding.feeding_type,
      // extra_hungry:feeding.extra_hungry,
      // notes:feeding.notes,
    }
  ])
}


