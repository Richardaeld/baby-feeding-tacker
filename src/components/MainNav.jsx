import { Link } from 'react-router-dom';

export function MainNav () {
  return (
    <nav>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/addFeeding'>Add Feeding</Link></div>
      <div><Link to='/history'>Feedings</Link></div>
      <div>Settings</div>
   </nav>
  )
}
