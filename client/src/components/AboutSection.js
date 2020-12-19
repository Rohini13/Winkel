import React, { Component } from 'react'
import {
    Button
} from 'reactstrap';
import kids from '../images/kids.jpg';
import { connect } from 'react-redux'

const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
}

const imageStyle = {
    float: "left",
    width: "35rem",
    borderRadius: "35px",
    padding: '25px'
}

const textStyle = {
    width: "50%",
    float: "right",
    textAlign: "center",
    fontFamily: "Cursive",
    fontSize: "15px"
}

export class AboutSection extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <img src={kids} style={imageStyle} />
                <div style={textStyle}>
                    <h3>
                        Bring a friend for your little one!
                    </h3>
                    <p>
                        "You’ve got a friend in me. <br/>You got troubles and I got ’em, too.<br/> There isn’t anything I wouldn’t do for you. <br/>We stick together, we can see it through <br/>’cause you’ve got a friend in me."
                    </p>
            </div>
            </section>
        )
    }
}

export default connect()(AboutSection);