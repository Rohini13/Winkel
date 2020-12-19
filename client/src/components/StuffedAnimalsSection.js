import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux'
import stuffedAnimal from '../images/stuffedAnimal.png'
import megaPlushToy from '../images/megaPlushToy.png'
import cuteDog from '../images/cuteDog.png'
import littleFriend from '../images/littleFriend.png'

const sectionStyle = {
    //marginLeft: "-80px",
    // width: "1270px",
    // height: "570px",
    width: "81rem",
    height: "35rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "-4rem"
};

const JumbotronStyle = {
    background: "F5F5F5",
    position: "absolute",
    marginTop: "3.5rem",
    width: "80%",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center"
};

const imageStyle = {
    height: "8rem"
}

const buttonStyle = {
    border: "None",
    borderRadius: "20px",
    background: "white",
    color: "black",
}

export class StuffedAnimalsSection extends Component {
    render() {
        return (
            <Container style={ sectionStyle }>
                <h3>Stuffed Animals</h3><hr />
                <Row><Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={stuffedAnimal} style={imageStyle}></img>
                        <br /><br /><h5>Teddy Bear</h5><br />
                            <Button className='btn'style={buttonStyle}>Rs. 250</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={megaPlushToy} style={imageStyle}></img>
                        <br /><br /><h5>Mega Plush Toy</h5><br />
                        <Button style={buttonStyle}>Rs. 200</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={cuteDog} style={imageStyle}></img>
                        <br /><br /><h5>Cute Dog</h5><br />
                        <Button style={buttonStyle}>Rs. 250</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={littleFriend} style={imageStyle}></img>
                        <br /><br /><h5>Little Friend</h5><br />
                        <Button style={buttonStyle}>Rs. 200</Button>
                    </Jumbotron>
                    </div>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(StuffedAnimalsSection);