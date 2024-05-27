import "./myNavStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


export const MyNav = () => {

    return (
            <div>
                <Nav defaultActiveKey="/dashboard" className="flex-column">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link eventKey="link-1">Reviews</Nav.Link>
                    <Nav.Link eventKey="link-2">New Releases</Nav.Link>
                    <Nav.Link eventKey="link-3">This week</Nav.Link>
                    <Nav.Link eventKey="link-4">This month</Nav.Link>
                    <Nav.Link eventKey="link-5">Coming soon</Nav.Link>
                    <Nav.Link eventKey="link-6">Popular</Nav.Link>
                    <Nav.Link eventKey="link-7">Last searches</Nav.Link>
                    <Nav.Link eventKey="link-8">Best of the year</Nav.Link>
                </Nav>
            </div> 
    );
}; 