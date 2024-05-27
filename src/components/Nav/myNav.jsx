import "./myNavStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar, faClock, faSearch, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const MyNav = () => {
    return (
        <div>
            <Nav defaultActiveKey="/dashboard" className="flex-column my-nav">
                <Nav.Link href="/" className="my-nav-link">
                    Home
                </Nav.Link>
                <Nav.Link eventKey="link-1" className="my-nav-link">
                    Reviews
                </Nav.Link>
                <Nav.Link eventKey="link-2" className="my-nav-link">
                    New Releases
                </Nav.Link>
                <Nav.Link eventKey="link-3" className="my-nav-link-sub">
                    <FontAwesomeIcon icon={faStar} className="me-2" />
                    This week
                </Nav.Link>
                <Nav.Link eventKey="link-4" className="my-nav-link-sub">
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    This month
                </Nav.Link>
                <Nav.Link eventKey="link-5" className="my-nav-link-sub">
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    Coming soon
                </Nav.Link>
                <Nav.Link eventKey="link-6" className="my-nav-link">
                    Popular
                </Nav.Link>
                <Nav.Link eventKey="link-7" className="my-nav-link-sub">
                    <FontAwesomeIcon icon={faSearch} className="me-2" />
                    Last searches
                </Nav.Link>
                <Nav.Link eventKey="link-8" className="my-nav-link-sub">
                    <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
                    Best of the year
                </Nav.Link>
            </Nav>
        </div>
    );
};