import {  useState } from 'react';
import { Link } from 'react-router-dom'
import "./Navbarra.css"
import { Form, FormControl, Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from "../../Components/Switch/Switch";
//importaciones de firebase
import appFirebase from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);
import MyModal from "../../Components/Modal/MyModal";




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
      <MyModal show={showModal} handleClose={handleClose} />
    </nav>} 

    </>
  );
}

export default Navbarra
