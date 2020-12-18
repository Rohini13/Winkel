import React, { Component } from 'react'
import {
    Jumbotron,
    Button
} from 'reactstrap';
import loadingBackground from '../images/loadingBackground.jpg';
import { connect } from 'react-redux'

const sectionStyle = {
    marginLeft: "-80px",
    width: "1270px",
    height: "570px",
    backgroundImage: "url("+ loadingBackground+")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

const JumbotronStyle = {
    background: "white",
    opacity: "0.8",
    position: "absolute",
    marginLeft: "300px",
    marginTop: "220px",
    width: "50%",
    border: "3px solid black",
    borderRadius: "20px",
    padding: "10px",
    textAlign: "center"
};

export class LandingSection extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
                <div>
                <Jumbotron  style={ JumbotronStyle }>
                    <h3 className="display-4">Welcome to Winkel!</h3><br></br>
                    <Button>Open Catalog</Button>
                </Jumbotron>
                </div>
            </section>
        )
    }
}

export default connect()(LandingSection);