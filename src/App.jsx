// import { useState } from 'react'
import { useState } from 'react';
import { Form } from './components/Form';
import { Feeding } from './components/Feeding';

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

const feedings= [
  {
      key:crypto.randomUUID,
      name: 'A',
      time: "YYYY/MM/DD H:I:S",
      consumed: 23,
      extra_hungry: true,
      notes: 'burp up',
  }
];

export function App() {
  const [feeding, setFeeding] = useState("");

  function addFeeding (feeding) {
    setFeeding(currentFeedings => [
      ...currentFeedings,
      {
        key:feeding.key,
        time:new Date(),
        consumed:feeding.consumed,
        extra_hungry:feeding.extra_hungry,
        notes:feeding.notes,
      }
    ])
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
      <Form form={form}></Form>
      <Feeding feedings={feedings}/>

    </main>
  )
}

