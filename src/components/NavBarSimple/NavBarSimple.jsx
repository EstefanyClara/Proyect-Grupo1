import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./NavBarSimple.css"
import { Form, FormControl, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';

export const NavBarSimple = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    



    return (
        <nav >
            <Button
                iconName="left-chevron"
                size="24"
            />
            <Link to="/dashboard">
                <img src="src\assets\images\Logo.png" alt="Logo" />
            </Link>
            <Button
                iconName="search"
                size="24"
            />
        </nav>
    );
}

export default NavBarSimple