import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./NavBarSimple.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../Buttons/Button';
import Switch from '../Switch/Switch';

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