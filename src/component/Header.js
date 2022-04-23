import React from 'react'
import './css/Header.css'
import avatar from '../img/avatar.jpg'
import { Container, Row, Col, Image, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ImTwitch, ImInstagram } from 'react-icons/im'
import { BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'

const Header = () => {
    return (
        <Container>
            <Row className='header'>
                <Col className='text-end ' md={4}>
                    <div className='avatar-wrapper'>
                        <Image className='avatar' src={avatar} roundedCircle={true} width='200px' height='200px' /></div>
                </Col>
                <Col md={8}>
                    <div className='mt-5 name-wrapper'>
                        <h1>John Doe</h1>
                        <h4 className='username'>@johndoeplays</h4>
                    </div>
                </Col>

                <Nav className="social-header justify-content-center" >
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Twitch
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link' ><ImTwitch /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Youtube
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link'><BsYoutube /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Twitter
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link'><BsTwitter /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Facebook
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link'><BsFacebook /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Instagram
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link'><ImInstagram /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                    <Nav.Item className='social-item'>
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id='tooltip-bottom'>
                                Tiktok
                            </Tooltip>
                        }>
                            <Nav.Link className='social-link'><FaTiktok /></Nav.Link>
                        </OverlayTrigger>
                    </Nav.Item>
                </Nav>
            </Row>

            <p className='header-intro'><RiDoubleQuotesL /> Hey there welcome to the official gaming profile of John Doe. You can expect something awesome in the games I play,
                like Dota 2, League of Legends, Roblox, GTA V, and more games to explore. Just stay tuned and follow my socials for future updates. <RiDoubleQuotesR />
            </p><br /><br /><br /><br /><br />
        </Container >
    )
}

export default Header