import React from 'react'
import { 
    Container,
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import '../assets/scss/adsetlist.scss';

import deleteIcon from '../assets/img/delete.png';

const AdsetList = () => {

    let adset = {
        'World': 125,
        'Cup': 125,
        'House': 452,
        'Numbers': 340,
        'Hero': 452,
        'Band': 340,
        'Hetzner': 125,
        'Minimal': 125,
        // 'Digital': 452,
        // 'Maos': 452,
        // 'Cats': 340,
        // 'Soft': 340,
        // 'Samsung': 125,
        // 'Students': 125,
        // 'Cola': 452,
        // 'Sprite': 340,
        // 'Tea': 340,
        // 'Coffee': 340
    }

    return (
        <Container>
            <section className="adset-list">
                <Card className="adset-card">
                    <Card.Header>
                        <Card.Title>
                            <h2>Test Adset 1</h2>
                        </Card.Title>
                        <i className="fas fa-ellipsis-h"></i>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            { adset && Object.keys(adset).map((item, index) => {
                                return (
                                    <ListGroupItem key={index}>
                                        <i className="fas fa-ellipsis-v"></i>
                                        <span className="name">{item}</span> 
                                        <span className="value">{adset[item]}</span>
                                        <img src={deleteIcon} alt="Delete"/>
                                        </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                    </Card.Body>
                    </Card>
            </section>
        </Container>
    )
}






export default AdsetList;