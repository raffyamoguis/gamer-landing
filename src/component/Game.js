import React from 'react'
import { Card } from 'react-bootstrap'
import { FaXbox } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import './css/Games.css'

const Game = ({ gameImg, gameName }) => {
    return (
        <Card className="bg-dark text-white game">
            <Card.Img src={gameImg} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>
                    <FaXbox className='game-platform' />
                    <HiOutlineDesktopComputer className='game-platform' />
                </Card.Title>
                <Card.Title className='game-name'>{gameName}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Game