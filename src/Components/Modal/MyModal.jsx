// LogoutModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../../credenciales";
import "./MyModal.css"; 
import { useContext } from 'react';
import { ThemeContext } from '../Context/Context';

const auth = getAuth(appFirebase);

const MyModal = ({ show, handleClose }) => {
    const themeSettings = useContext(ThemeContext);

    const modalImage = themeSettings.mode === 'dark' ? 
    'src/assets/images/exitwhite.svg' 
    : 'src/assets/images/man-and-opened-exit-door.png';
    
  return (
    <Modal show={show} onHide={handleClose}>
      <img className='iconLogout' src={modalImage} alt='Exit icon' />
      <Modal.Body className={'modalText-'+ themeSettings.mode}>Oh no! You are leaving...<br />Are you sure?</Modal.Body>
      <Modal.Footer className={'modal-footer-vertical-'+ themeSettings.mode}>
        <Button variant='primary' onClick={handleClose}>
          Naah, Just Kidding
        </Button>
        <Button variant="outline-secondary" onClick={() => signOut(auth)}>Yes log me out</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;