import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyModal.css"


const MyModal = ({ title, children, show }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-custom"
            >
                <Modal.Header closeButton className='border-0 '>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='border-0'>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MyModal;