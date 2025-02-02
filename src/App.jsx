// import { useState } from 'react'
import { useState } from 'react';
import { Form } from './components/Form';
import { Feeding } from './components/Feeding';
import { MainNav } from './components/MainNav';
import { format } from 'date-fns';
import { Routes, Route } from 'react-router-dom';

const form = {
  header: 'Add Feeding',
  inputs: [
    {
      name:'name',
      type: 'select',
      enum: [
        {key: 1, name: 'Issac'},
        {key: 2, name: 'Chloe'},
      ]
    },
    {
      name: 'consumed_(oz)',
      type: 'input_radio',
      radio: Array.from({ length:16 }, (_, i) => i + 1)
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

console.log(form)


export function App() {
  const [feedings, setFeedings] = useState([]);


  function addFeeding (feeding) {
    // console.log('newfeeding', feeding)
    setFeedings([
      ...feedings, {
        key:crypto.randomUUID(),
        // key:feeding.key,
        name: feeding.name,
        time:format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
        consumed:feeding.consumed,
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

