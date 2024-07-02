// LogoutModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../../credenciales";
import "./MyModal.css"; // Suponiendo que haya estilos específicos para el modal

const auth = getAuth(appFirebase);

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <img className='iconLogout' src='src/assets/images/man-and-opened-exit-door.png' alt='Exit icon' />
      <Modal.Body className='modalText'>Oh no! You are leaving...<br />Are you sure?</Modal.Body>
      <Modal.Footer className='modal-footer-vertical'>
        <Button variant='primary' onClick={handleClose}>
          Naah, Just Kidding
        </Button>
        <Button variant="outline-secondary" onClick={() => signOut(auth)}>Yes log me out</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;