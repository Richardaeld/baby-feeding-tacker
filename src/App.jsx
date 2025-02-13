// import { useState } from 'react'
import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
import { Routes, Route } from 'react-router-dom';

// import { Form } from './components/Form';
// import { Feeding } from './components/Event.jsx';
import { Home } from './pages/Home.jsx'
import { History } from './pages/History';
import { MainNav } from './components/MainNav';

// import { capitalizeEveryFirstLetter } from './js/general.js';
import { capitalizeEveryFirstLetter, displayEvents, addEvent } from './js/general.js';


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
  useEffect(() => {
    const getEvents = async () => {
      const events =  await displayEvents('http://localhost:8080/events/feeding', 'GET');
      setFeedings('');
      events.map(event => addEvent(setFeedings, event))
    }
    getEvents();
  }, [])

  const [feedings, setFeedings] = useState([]);


  return (
    <main>
      <MainNav></MainNav>
      <h1>Baby Event Tracker</h1>
      <Routes>
        <Route path='/' element={<Home events={feedings}/>}        />
        {/* <Route path='/addFeeding' element={<Form form={form} addFeeding={addEvent} feeding={feedings}/>}></Route> */}
        <Route path='/history' element={<History Events={feedings}/>} />
      </Routes>
    </main>
  )
}

