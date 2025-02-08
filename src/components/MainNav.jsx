import { Link } from 'react-router-dom';

export function MainNav () {
  return (
    <nav>
      <div><Link to='/'><i className="fa-solid fa-house"></i> Home</Link></div>
      <div><Link to='/addFeeding'><i className="fa-solid fa-plus"></i> Add Event</Link></div>
      <div><Link to='/history'><i className="fa-solid fa-book-medical"></i> History</Link></div>
      <div><i className="fa-solid fa-gear"></i> Settings</div>
   </nav>
  )
}
