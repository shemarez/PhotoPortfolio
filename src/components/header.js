import React from "react"
import { Navbar, Nav, Form, Container} from 'react-bootstrap';
import '../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

export default props =>
(

    <div className="header-container" >
        <Navbar className="nav-container">
            <div className="logo-container" >
                <img src={logo}></img>
            </div>
            <div className="nav-items-container">
                <Nav className="mr-auto">
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="about">about</Nav.Link>
                    <Nav.Link href="contact">contact</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    </div>
      
    
)


