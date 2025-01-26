// import { useState } from 'react'
import { Form } from './components/Form';

const form = {
  header: 'Add Feeding',
  inputs: [
    {
      name:'name',
      input: 'input',
    },
    {
      name: 'time',
      input: 'input',
    },
    {
      name: 'consumed',
      input: 'input',
    },
    {
      name: 'extra_hungry',
      input: 'input_checkbox',
    },
    {
      name:'notes',
      input:'textarea',
    }
  ]
}
form.inputs.map(input => input.id = crypto.randomUUID());

export function App() {
  // const [count, setCount] = useState(0)

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

    </main>
  )
}

