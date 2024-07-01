import {  useState } from 'react';
import { Link } from 'react-router-dom'
import "./Navbarra.css"
import { Form, FormControl, Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Switch from "../../Components/Switch/Switch";
//importaciones de firebase
import appFirebase from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);
import { useContext } from 'react';
import { ThemeContext } from '../Context/Context';


export const Navbarra = ({isPlain}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  

    
  return (
    <>
    {isPlain ? 
    <div className='plain-mode-dark'> 
      <div>
        <img src="src\assets\images\GAMEFINDER.png" alt="Logo" className="logo-image" />
      </div>
        <Switch/>
    </div>
    :
    <nav>
      <Link to="/dashboard">
        <img src="src\assets\images\Logo.png" alt="Logo" />
      </Link>          
      <Form inline className='search-form'>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <ul>
        <li>
        <Button variant="outline-light" onClick={handleShow} className="logout-button">Log out</Button>
          <img className='userImage' src="src\assets\images\user.png" alt="Log out" />
        </li>
        <Switch/>
      </ul> 

      <Modal show={showModal} onHide={handleClose}>
        <img className='iconLogout' src='src\assets\images\man-and-opened-exit-door.png'/>
        <Modal.Body className='modalText'>Oh no! You are leaving...<br/>Are you sure? </Modal.Body>
        <Modal.Footer className='modal-footer-vertical'>
          <Button variant='primary' onClick={handleClose}>
            Naah, Just Kidding
          </Button>
          <Button variant="outline-secondary" onClick={()=> signOut(auth)}>Yes log me out</Button>
        </Modal.Footer>   
      </Modal> 
    </nav>} 

    </>
  );
}

export default Navbarra
