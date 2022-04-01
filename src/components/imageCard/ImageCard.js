import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ImageCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJts94X7VZPQSpOfOSeKBgp10qCK3lOt6_aw&usqp=CAU" 
            />
            <Card.Body>
                <Card.Title>Ejercicio React 1</Card.Title>
                <Card.Text>
                    Siguiendo el tutorial de React para hacer un gato y la documentación de Bootstrap logré hacer esta página.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ImageCard;