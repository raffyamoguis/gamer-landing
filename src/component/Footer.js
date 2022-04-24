import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './css/Footer.css'

const Footer = () => {
    return (
        <>
            <Container className='footer' fluid>
                <div className='footer-info'>
                    <Row>
                        <Col md={3} className=''>
                            <div className='footer-content'>
                                <h1 className='footer-headline'>John Doe</h1>
                                <p>A gaming profile that you can use everywhere when one link isn't enough. Make it easy for ur followers to find you.</p>
                            </div>
                        </Col>
                        <Col md={3} className=''>
                            <div className='footer-content'>
                                <h4 className='footer-headline'>About</h4>
                                <a>About</a><br />
                                <a>Contact</a><br />
                                <a>FAQ</a><br />
                                <a>Facebook</a><br />
                                <a>Twitter</a><br />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='footer-content'>
                                <h4 className='footer-headline'>Resources</h4>
                                <a>Help and Support</a><br />
                                <a>Partners</a><br />
                                <a>Discord Server</a><br />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='footer-content'>
                                <h4 className='footer-headline'>Contact</h4>
                                <a>Facebook</a><br />
                                <a>Twitter</a><br />
                                <a>Google+</a><br />
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr className='footer-hr' />
                <Button className='footer-claim mb-5 shadow-none' size='lg'>Claim Your Profile</Button>
            </Container>
            <Container>
                <h6 className='text-center p-4 footer-credit'>© 2022 JOHN DOE</h6>
            </Container>
        </>
    )
}

export default Footer