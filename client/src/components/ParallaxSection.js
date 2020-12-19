import React, { Component } from 'react'
import {
    Button
} from 'reactstrap';
import teddybear from '../images/teddybear.jpg';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const sectionStyle = {
    /* The image used */
  backgroundImage: "url("+teddybear+")",

  /* Set a specific height */
  minHeight: "400px",

  /* Create the parallax scrolling effect */
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginLeft: "-5rem",
  marginRight: "-5rem",
  color: "white",
  padding: "130px"
};

const buttonStyle = {
    border: "None",
    borderRadius: "20px",
    background: "white",
    color: "black",
    width: "8rem"
}

/*const JumbotronStyle = {
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
};*/

export class ParallaxSection extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
            <div style={{textAlign:"center", float:"left"}}>
                <h3> Need a warm cuddly bear hug?</h3><br /><br />
                    <Link to="/allitems"><Button style={buttonStyle} className='btn'>Shop Now</Button></Link>
            </div>   
            </section>
        )
    }
}

export default connect()(ParallaxSection);