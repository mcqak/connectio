import React from 'react'
import { 
    Container,
    Card,
    ListGroup,
    ListGroupItem,
    Row,
    Col
} from 'react-bootstrap';

import '../assets/scss/adsetlist.scss';

import deleteIcon from '../assets/img/delete.png';

const AdsetList = (props) => {

    const { rangeValue } = props;

    let adset = {
        'World': 125,
        'Cup': 125,
        'House': 452,
        'Numbers': 340,
        'Hero': 452,
        'Band': 340,
        'Hetzner': 125,
        'Minimal': 125,
        'Digital': 452,
        'Maos': 452,
        'Cats': 340,
        'Soft': 340,
        'Samsung': 125,
        'Students': 125,
        'Cola': 452,
        'Sprite': 340,
        'Tea': 340,
        'Coffee': 340
    }

    const numberOfAdsets = Math.floor(Object.keys(adset).length);
    const itemsPerAdset = Math.floor(numberOfAdsets / rangeValue);
    const residual = numberOfAdsets % rangeValue;
    let adsetsArray = [];
    console.log(itemsPerAdset)
    for (let i = 0; i < rangeValue; i++) {
        const slicedArray = Object.entries(adset).slice(i * itemsPerAdset, i * itemsPerAdset + itemsPerAdset);
        if (slicedArray.length) {
            adsetsArray.push(slicedArray)
        }
    }
    if (residual) {
        let count = 0;
        for (let i = numberOfAdsets - residual; i < numberOfAdsets; i++) {
            adsetsArray[count].push(Object.entries(adset)[i])
            count++;
        }
    }

    console.log(adsetsArray)

    return (
        <Container>
            <section className="adset-list">
                <Row className="justify-content-center justify-content-lg-start">
                    {adsetsArray && adsetsArray.map((adset, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
                                <Card className="adset-card">
                                    <Card.Header>
                                        <Card.Title>
                                            <h2>Test Adset {index + 1}</h2>
                                        </Card.Title>
                                        <i className="fas fa-ellipsis-h"></i>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup className="list-group-flush">
                                            { adset && adset.map((item, index) => {
                                                return (
                                                    <ListGroupItem key={index}>
                                                        <i className="fas fa-ellipsis-v"></i>
                                                        <span className="name">{item[0]}</span> 
                                                        <span className="value">{item[1]}</span>
                                                        <img src={deleteIcon} alt="Delete"/>
                                                    </ListGroupItem>
                                                )
                                            })}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </section>
        </Container>
    )
}






export default AdsetList;