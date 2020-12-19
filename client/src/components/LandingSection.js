import React, { Component } from 'react'
import {
    Jumbotron,
    Button
} from 'reactstrap';
import loadingBackground from '../images/loadingBackground.jpg';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const sectionStyle = {
    //marginLeft: "-80px",
    // width: "1270px",
    // height: "570px",
    marginLeft: "-6rem",
    width: "81rem",
    height: "35rem",
    backgroundImage: "url(" + loadingBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

const JumbotronStyle = {
    background: "white",
    opacity: "0.8",
    position: "absolute",
    // marginLeft: "300px",
    // marginTop: "220px",
    marginLeft: "20rem",
    marginTop: "14rem",
    width: "50%",
    //border: "3px solid black",
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center"
};

export class LandingSection extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <div>
                    <Jumbotron style={JumbotronStyle}>
                        <h3 className="display-4">Welcome to Winkel</h3><br></br>
                        <Link to="/allitems"><Button className='btn'>Open Catalog</Button></Link>
                    </Jumbotron>
                </div>
            </section>
        )
    }
}

export default connect()(LandingSection);