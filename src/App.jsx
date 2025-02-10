// import { useState } from 'react'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Routes, Route } from 'react-router-dom';

import { Form } from './components/Form';
import { Feeding } from './components/Event.jsx';
import { MainNav } from './components/MainNav';

import { capitalizeEveryFirstLetter } from './js/general.js';


const revealFormElement = (target, toggleType ,e) => {
  const formNodes = e.target.closest('form').querySelectorAll('fieldset');
  formNodes.forEach(node => {
    const text = node.querySelector('span').textContent;

    if (text == capitalizeEveryFirstLetter(target)) {
      switch (toggleType) {
        case 'remove': return node.classList.remove('visibility-none');
        case 'add'   : return node.classList.add('visibility-none');
      }
    }
  })
}

const form = {
  header: 'Add Feeding',
  inputs: [
    {
      name:'name',
      type: 'input_radio',
      radio: [
        'Issac',
        'Chloe',
      ]
    },
    {
      name:'event_type',
      type:'input_radio',
      radio: ['Feeding', 'Bath', 'Diaper', 'Medicine', 'Other'],
      className:'event-type'
    },
    {
      name: 'feeding_type',
      type: 'input_radio',
      radio: ['Bottle', 'Breast'],
      events: {
        onClick:[
          (e) => {
            (e.target.value === 'Breast')
              ? revealFormElement('breast', 'remove', e)
              : revealFormElement('breast', 'add',    e);
          },
          (e) => {
            (e.target.value === 'Bottle')
              ? revealFormElement('bottle', 'remove', e)
              : revealFormElement('bottle', 'add',    e);
          },
        ]},
    },
    {
      name: 'breast',
      type: 'input_radio',
      radio: ['Left', 'Right'],
      className: "visibility visibility-none"
    },
    {
      name: 'bottle',
      type: 'input_radio',
      radio: Array.from({ length:16 }, (_, i) => i + 1 + ' oz'),
      className: "visibility visibility-none"
    },
    {
      name: 'extra_hungry',
      type: 'input_checkbox',
      checked: false,
    },
    {
      name:'notes',
      type:'textarea',
    }
  ]
}
form.inputs.map(input => input.key = crypto.randomUUID());

export function App() {
  const [feedings, setFeedings] = useState([]);


async function fetchEvents() {
  try {
    const response =  await fetch ('http://localhost:8080/events', {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
      }
    })
    if (!response.ok) throw new Error("Network error");

    const events = await response.json();

    console.log(events)

    return events;
  } catch (error) {
    console.error("FETCH BROKEN ", error)
  }
}
async function displayEvents() {
  const events = await fetchEvents();
  console.log("------------------------------", events)

  events.forEach(feeding => {
    setFeedings(prevFeedings => [
      ...prevFeedings, {
        key:crypto.randomUUID(),
        name: feeding.event_type,
        time: feeding.start_on,
      }
    ])
  })

}
useEffect(() => {
  displayEvents()
}, [])



  function addFeeding (feeding) {
    console.log('newfeeding', feeding)
    setFeedings([
      ...feedings, {
        key:crypto.randomUUID(),
        // key:feeding.key,
        name: feeding.name,
        breast: feeding.breast,
        time:format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
        bottle:feeding.bottle,
        feeding_type: feeding.feeding_type,
        extra_hungry:feeding.extra_hungry,
        notes:feeding.notes,
      }
    ])
    // console.log('AllFeedings', feedings)
  }


  return (
    <main>
      <MainNav></MainNav>
      <h1>Baby Feeding Tracker</h1>
      <Routes>
        <Route path='/'         />
        <Route path='/addFeeding' element={<Form form={form} addFeeding={addFeeding} feeding={feedings}/>}></Route>
        <Route path='/history' element={<Feeding feedings={feedings}/>} />
      </Routes>
    </main>
  )
}

