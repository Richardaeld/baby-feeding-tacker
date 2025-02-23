// import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { Event } from './../classes/Event.ts'


export function capitalizeEveryFirstLetter (string: string) : string {
   return string.replaceAll("_", " ").split(" ").map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}


export async function fetchEvents(http : string, method : string) {
   try {
     const response : Response  =  await fetch (http, {
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


export async function displayEvents(http :string, method :string) {
  return await fetchEvents(http, method);
}


export function addEvent(setEvent :React.Dispatch<React.SetStateAction<Event[]>>, event :Event) {
  // console.log('newfeeding', event)
  if (!event.first_name && !event.event_type) return

  setEvent(feedings => [
    ...feedings, {
      // key         : event.event_id,
      key         :crypto.randomUUID(),
      amount      : event.amount,
      baby_id     : event.baby_id,
      birthday    : event.birthday,
      color       : event.color,
      dosage      : event.dosage,
      end_on      : event.end_on,
      event_id    : event.event_id,
      event_type  : event.event_type,
      feeding_type: event.feeding_type,
      first_name  : event.first_name,
      gender      : event.gender,
      height      : event.height,
      last_name   : event.last_name,
      name        : event.name,
      note        : event.note,
      note_id     : event.note_id,
      start_on    : event.start_on,
      weight      : event.weight,
    }
  ])
  // Navigate('/');
}


