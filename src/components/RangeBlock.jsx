import React, { useState } from 'react'
import { 
    Row, 
    Col,
    Container
} from 'react-bootstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import '../assets/scss/range.scss'

const RangeBlock = () => {

    const [rangeValue, setRangeValue] = useState(5)

    const handleChange = (value) => {
        setRangeValue(value)
    }


    return (
        <Container>
            <section className="adsets-info-and-range">
                <Row>
                    <Col xs={3}>
                        <div className="adsets-info">
                            <p><span>$15 000</span> campaign budget</p>
                            <p><span>22</span> interests</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="adsets-range">
                            <Slider 
                                min={0}
                                max={6}
                                step={1}
                                value={rangeValue}
                                tooltip={false}
                                handleLabel={rangeValue}
                                onChange={handleChange}
                            />
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="create-adsets-btn-wrapper">
                            <button disabled>Create adsets</button>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}




export default RangeBlock;