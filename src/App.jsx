// import { useState } from 'react'
import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
import { Routes, Route } from 'react-router-dom';

import { Form } from './components/Form';
// import { Feeding } from './components/Event.jsx';
import { Home } from './pages/Home.jsx'
import { History } from './pages/History'; // ! fix css
import { MainNav } from './components/MainNav';

// import { capitalizeEveryFirstLetter } from './js/general.js';
import { capitalizeEveryFirstLetter, displayEvents, addEvent } from './js/general.js';


const revealFormElement = (target, toggleType, e) => {
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
    // Baby Name
    {
      name:'name',
      type: 'input_radio',
      radio: [
        'Issac',
        'Chloe',
      ]
    },
    // Events
    {
      name:'event_type',
      type:'input_radio',
      radio: [
        'Bath',
        'Diaper',
        'Feeding',
        'Growth',
        'Medication',
        'Night Check',
        'Pumping',
        'Temperature',
        'Tummy Time',
      ],
      className:'event-type',
      events: {
        onClick:[
          (e) => {
            revealFormElement('feeding_type',          'add', e);
            revealFormElement('breast',                'add', e);
            revealFormElement('bottle',                'add', e);
            revealFormElement('bath_post_care_oil',    'add', e);
            revealFormElement('bath_post_care_lotion', 'add', e);
            revealFormElement('diaper_type',           'add', e);

            switch(e.target.value) {
              case 'Feeding': 
                revealFormElement('feeding_type', 'remove', e); 
                break;
              case 'Bath'   : 
                revealFormElement('bath_post_care_oil', 'remove', e);
                revealFormElement('bath_post_care_lotion', 'remove', e);
                break;
              case 'Diaper' : 
                revealFormElement('diaper_type', 'remove', e);
                break;

            }
          }
        ]
      }
    },
    {
      name: 'feeding_type',
      type: 'input_radio',
      radio: ['Bottle', 'Breast'],
      className: "visibility visibility-none",
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
        ]
      },
    },
    // ! Bath
    {
      name: 'bath_post_care_oil',
      type: 'input_checkbox',
      className: "visibility visibility-none",
      checked: false,
    },
    {
      name: 'bath_post_care_lotion',
      type: 'input_checkbox',
      className: "visibility visibility-none",
      checked: false,
    },
    // ! Diaper
    {
      name: 'diaper_type',
      type: 'input_radio',
      radio: ['Pee', 'Poop', 'Blow-out'],
      className: "visibility visibility-none",
    },
    // ! Feeding
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
    // ! Growth
    {
      name: 'growth_height',
      type: 'input_text',

      // className: "visibility visibility-none"

    },
    {
      name:'notes',
      type:'textarea',
    }
  ]
}
form.inputs.map(input => input.key = crypto.randomUUID());

export function App() {
  useEffect(() => {
    const getEvents = async () => {
      const events =  await displayEvents('http://localhost:8080/events/feeding', 'GET');
      setEvents(''); // ! -- DEV -- stops duplicate data
      events.map(event => addEvent(setEvents, event))
    }
    getEvents();
  }, [])

  const [events, setEvents] = useState([]);


  return (
    <main>
      <MainNav></MainNav>
      {/* <h1>Baby Event Tracker</h1> */}
      <Routes>
        <Route path='/' element={<Home events={events}/>}        />
        <Route path='/addFeeding' element={<Form form={form} addFeeding={addEvent} feeding={events}/>}></Route>
        {/* <Route path='/history' element={<History Events={events}/>} /> */}
      </Routes>
    </main>
  )
}

