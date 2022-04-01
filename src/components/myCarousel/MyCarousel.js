import React from 'react'
import { Carousel } from 'react-bootstrap'
import './myCarousel.css'

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://bromptoning.com/wp-content/uploads/2019/07/D9-13-Mayan-tic-tac-toe.jpg"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption style={{color: "rgb(243, 247, 0)"}}>
                    <h3>WHERE DID THE NAME COME FROM?</h3>
                    <p>The early Roman version was known as terni lapilli, or three pebbles at a time. In the mid-1800s, Britain used the name noughts and crosses, with nought referring to the O’s (or zeros) used in the game.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.coolmathgames.com/sites/default/files/styles/blog_node_image/public/2021-03/tic%20tact%20toe%20history%20thumb.png?itok=KGdMWNHe"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>The United States officially adopted the name tic tac toe in the 20th century. Historians aren’t completely clear about the origin of the game’s name, but it could be referring to the noise of repetitive ticking or writing that goes along with the game’s play.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel;