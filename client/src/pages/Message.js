import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import loadingBackground from '../images/loginwall.jpg';

const sectionStyle = {
    width: "1000x",
    height: "800px",
    backgroundImage: "url(" + loadingBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
};

const JumbotronStyle = {
    background: '#e75480',
    position: "absolute",
    marginTop: "20rem",
    marginLeft: "25rem",
    width: "500px",
    borderRadius: "20px",
    padding: "25px",
    opacity: '0.9',
    textAlign: 'center',
    color: 'white'
};

export class Message extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <Jumbotron style={JumbotronStyle}>
                    <h3>
                        {this.props.msg}
                    </h3>

                </Jumbotron>
            </div>
        )
    }
}

export default Message
