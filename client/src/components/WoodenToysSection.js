import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux'
import woodenToy from '../images/woodenToy.png'
import littleRabbit from '../images/littleRabbit.png'
import liftMachine from '../images/liftMachine.png'
import woodenCamera from '../images/woodenCamera.png'

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

export class WoodenToysSection extends Component {
    render() {
        return (
            <Container style={ sectionStyle }>
                <h3>Wooden Toys</h3><hr />
                <Row><Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={woodenToy} style={imageStyle}></img>
                        <br /><br /><h5>Happy Flower</h5><br />
                        <Button style={buttonStyle}>Rs. 200</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={woodenCamera} style={imageStyle}></img>
                        <br /><br /><h5>Wooden Camera</h5><br />
                        <Button style={buttonStyle}>Rs. 300</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={liftMachine} style={imageStyle}></img>
                        <br /><br /><h5>Lift Machine</h5><br />
                        <Button style={buttonStyle}>Rs. 300</Button>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle }>
                        <img src={littleRabbit} style={imageStyle}></img>
                        <br /><br /><h5>Little Rabbit</h5><br />
                        <Button style={buttonStyle}>Rs. 250</Button>
                    </Jumbotron>
                    </div>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(WoodenToysSection);