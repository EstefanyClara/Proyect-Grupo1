import {  useState } from 'react';
import { Link } from 'react-router-dom'
import "./NavBarra.css"
import { Form, FormControl, Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Switch from '../Switch/Switch'; 
import { ThemeContext } from '../Context/Context';
import { useContext } from 'react';

export const NavBarra = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const themeSettings = useContext(ThemeContext); 
  const handleLogout = () => {
    console.log('Logging out');
    handleClose();
  };

    
  return (
    <nav>
      <Link to="/dashboard">
        <img src="src\assets\images\Logo.png" alt="Logo" />
      </Link>          
      <Form inline className={'search-form-' + themeSettings.mode}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <ul>
        <li>
          <Switch></Switch>
        </li>
        <li>
        <Button variant="outline-light" onClick={handleShow} className="logout-button">Log out</Button>
          <img className='userImage' src="src\assets\images\user.png" alt="Log out" />
        </li>
        
        
      </ul> 
      
      <Modal show={showModal} onHide={handleClose}>
        <img className='iconLogout' src='src\assets\images\man-and-opened-exit-door.png'/>
        <Modal.Body className='modalText'>Oh no! You are leaving...<br/>Are you sure? </Modal.Body>
        <Modal.Footer className='modal-footer-vertical'>
          <Button variant='primary' onClick={handleClose}>
            Naah, Just Kidding
          </Button>
          <Button variant="outline-secondary" onClick={handleLogout}>
           <NavLink to="/" className="nav-link">Yes, Log Me Out</NavLink>
          </Button>
        </Modal.Footer>   
      </Modal> 
      
    </nav>
  );
};



export default NavBarra;

