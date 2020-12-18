import React, { Component } from 'react'
import {
    Button
} from 'reactstrap';
import kids from '../images/kids.jpg';
import { connect } from 'react-redux'

const sectionStyle = {

  marginLeft: "-5rem",
  marginRight: "-5rem",
  marginTop: "10rem",
  padding: "70px"
}

const imageStyle = {
    float: "left",
    width: "35rem",
    borderRadius: "35px"
}

const textStyle = {
    width: "50%",
    position: "absolute",
    marginLeft: "35rem",
    textAlign: "center",
    padding: "100px",
    fontFamily: "Cursive",
    fontSize: "23px"
}

export class AboutSection extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
            <img src={kids} style={imageStyle} />
            <div style={textStyle}>
                "You’ve got a friend in me. You got troubles and I got ’em, too. There isn’t anything I wouldn’t do for you. We stick together, we can see it through ’cause you’ve got a friend in me."
            </div>
            </section>
        )
    }
}

export default connect()(AboutSection);