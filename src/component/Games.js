import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import data from './Data'
import Game from './Game'
import './css/Games.css'

const Games = () => {
    return (
        <Container>
            <div className='games'>

                <h2 className='games-header'>Games I play</h2>
                <p className='games-secondary'>I'm always exploring some new games to try.</p>

                <Row xl={6} lg={4} md={3} sm={2} xs={1} className="g-4 display-games">
                    {
                        data.games.map(game => (
                            <Col className='a'>
                                <Game gameImg={game.image} gameName={game.name} />
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </Container>
    )
}

export default Games