// import { useState } from 'react'
import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
import { Routes, Route } from 'react-router-dom';

import { formStructure } from './js/formStructure.js';
import { Form } from './components/Form';
// import { Feeding } from './components/Event.jsx';
import { Home } from './pages/Home.jsx'
import { History } from './pages/History'; // ! fix css
import { MainNav } from './components/MainNav';

// import { capitalizeEveryFirstLetter } from './js/general.js';
import { capitalizeEveryFirstLetter, displayEvents, addEvent } from './js/general.js';


export function App() {
  useEffect(() => {
    const getEvents = async () => {
      const events =  await displayEvents('http://localhost:8080/events/feeding', 'GET');
      setEvents(''); // ! -- DEV -- stops duplicate data
      events.map(event => addEvent(setEvents, event))
    }
    getEvents();
  }, [])

  const form = formStructure();

  // const [formHeader, setFormHeader] = useState('Add Feeding')


  const [events, setEvents] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState([{event_type:"DIAPER"}]);


  const  openModal  = (event, e) => {
    // return setIsModalOpen(true)
    // console.log(event, e)
    setModalChildren(event)

    // console.log(modalChildren)

    return setIsModalOpen(!isModalOpen)
  };
  const  closeModal = () => setIsModalOpen(false);

  



  return (
    <main>
      <MainNav></MainNav>
      {/* <h1>Baby Event Tracker</h1> */}
      <Routes>
        <Route path='/' element={<Home events={events} isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} modalChildren={modalChildren} setModalChildren={setModalChildren} form={form} addFeeding={addEvent} feeding={events}/>} />
        <Route path='/addFeeding' element={<Form form={form} addFeeding={addEvent} feeding={events} isModalOpen={isModalOpen}/>}></Route>
        {/* <Route path='/history' element={<History Events={events}/>} /> */}
      </Routes>
    </main>
  )
}

