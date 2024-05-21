import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
  
    
  return (
    <nav>
      <Link to="/" className="title">Home</Link>
        <ul>
            <li>
                <NavLink to="/logOut">Log out</NavLink>
            </li>
        </ul>

        <h1>Home </h1>
        
    </nav>
  )
}