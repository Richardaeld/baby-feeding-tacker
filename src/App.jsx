// import { useState } from 'react'
import { useState } from 'react';
import { Form } from './components/Form';
import { Feeding } from './components/Feeding';
import { format } from 'date-fns';

const form = {
  header: 'Add Feeding',
  inputs: [
    {
      name:'name',
      type: 'input',
    },
    // {
    //   name: 'time',
    //   type: 'input',
    // },
    {
      name: 'consumed',
      type: 'input',
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
      <h1>Baby Feeding Tracker</h1>
      <div>
        <h2>Babies</h2>
        <div>
          <h3>baby name</h3>
        </div>
        <div>
          <h3>baby name</h3>
        </div>
      </div>
      <Form form={form} addFeeding={addFeeding} feeding={feedings}/>
      <Feeding feedings={feedings}/>

    </main>
  )
}

