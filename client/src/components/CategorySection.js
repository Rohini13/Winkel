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
import woodenToy from '../images/woodenToy.png'
import {Link} from 'react-router-dom'

const sectionStyle = {
    marginLeft: "-6rem",
    width: "81rem",
    height: "35rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white"
};

const JumbotronStyle1 = {
    background: "orange",
    position: "absolute",
    marginLeft: "7rem",
    marginTop: "10rem",
    width: "80%",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center"
};

const JumbotronStyle2 = {
    background: "#e75480",
    position: "absolute",
    marginLeft: "8rem",
    marginTop: "10rem",
    width: "80%",
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center"
};

const imageStyle1 = {
    float: "left",
    height: "10rem"
}

const imageStyle2 = {
    float: "right",
    height: "10.7rem"
}

const buttonStyle = {
    border: "None",
    borderRadius: "20px",
    background: "white",
    color: "black",
}

export class CategorySection extends Component {
    render() {
        return (
            <Container style={ sectionStyle }>
                <Row><Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle1 }>
                        <img src={stuffedAnimal} style={imageStyle1}></img>
                        <br /><h3>Stuffed Animals</h3><br />
                        <Link to="/stuffedanimals"><Button style={buttonStyle}>Shop Now</Button></Link>
                    </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                    <Jumbotron  style={ JumbotronStyle2 }>
                        <img src={woodenToy} style={imageStyle2}></img>
                        <br /><h3>Wooden Toys</h3><br />
                        <Link to="/woodentoys"><Button style={buttonStyle}>Shop Now</Button></Link>
                    </Jumbotron>
                    </div>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(CategorySection);