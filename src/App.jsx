// import { useState } from 'react'

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

    <form action="">
      <h2>Add Feeding</h2>
      <label htmlFor=""> 
        name
        <input type="text" />
      </label>
      <label htmlFor=""> 
        time
        <input type="text" />
      </label>
      <label htmlFor=""> 
        consumed
        <input type="text" />
      </label>
      <label htmlFor=""> 
        extra hungry
        <input type="text" />
      </label>
      <label htmlFor=""> 
        name
        <input type="text" />
      </label>
      <label htmlFor=""> 
        name
        <input type="text" />
      </label>
      <label htmlFor=""> 
        Notes
        <textarea name="" id=""></textarea>
      </label>
      <button>submit</button>
    </form>

    </main>
  )
}

