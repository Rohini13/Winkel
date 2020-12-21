import React, { Component } from 'react'
import {
    Jumbotron,
    Button
} from 'reactstrap';
import loadingBackground from '../images/loadingBackground.jpg';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "570px",
    width: "1300px",
    marginLeft: '-7rem',
    backgroundImage: "url(" + loadingBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

const JumbotronStyle = {
    background: "white",
    opacity: "0.9",
    width: "100%",
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
                        <Link to="/allitems"><Button className='button'>Open Catalog</Button></Link>
                    </Jumbotron>
                </div>
            </section>
        )
    }
}

export default connect()(LandingSection);