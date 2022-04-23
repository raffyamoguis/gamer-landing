import React from 'react'
import './css/Navigation.css'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect, } from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { height, width } = useWindowDimensions();

    return (
        <Navbar className='navigation'>
            <Container>
                <Navbar.Brand id='brand' href="#home"><span>JOHN</span>DOE</Navbar.Brand>

                {
                    width >= 800 ?
                        <Nav className="justify-content-end navv">
                            <Nav.Link className='item active' href="#home">Home</Nav.Link>
                            <Nav.Link className='item' href="#features">About</Nav.Link>
                            <Nav.Link className='item' href="#pricing">Login</Nav.Link>
                            <Nav.Link className='item' href="#pricing">Register</Nav.Link>
                        </Nav> :
                        <>
                            <Nav className='justify-content-end navv'>
                                <Nav.Link className='item' onClick={handleShow}><GiHamburgerMenu /></Nav.Link>
                            </Nav>
                            <Offcanvas show={show} onHide={handleClose} placement='end' style={{ backgroundColor: '#16161a', width: `${width / 2}px` }}>
                                <Offcanvas.Header closeButton closeVariant='white' style={{ color: '#fffffe' }}>
                                    <Offcanvas.Title>Menu</Offcanvas.Title>

                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="flex-column navv">
                                        <Nav.Link className='item active' href="#home">Home</Nav.Link>
                                        <Nav.Link className='item' href="#features">About</Nav.Link>
                                        <Nav.Link className='item' href="#pricing">Login</Nav.Link>
                                        <Nav.Link className='item' href="#pricing">Register</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                }

            </Container>
        </Navbar>
    )
}

export default Navigation