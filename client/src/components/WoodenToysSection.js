import axios from 'axios';

import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
} from 'reactstrap';
import { connect } from 'react-redux'

const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "2rem",
};

const JumbotronStyle = {
    background: "F5F5F5",
    marginTop: "3.5rem",
    marginLeft: "5rem",
    width: "80%",
    borderRadius: "20px",
    padding: "20px",
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

class DisplayItem extends Component {

    render() {
        return (
            this.props.id < 4 ?
                <div>
                    <Jumbotron style={JumbotronStyle}>
                        <img src={require(`../${this.props.item.image}`).default} style={imageStyle}></img>
                        <br /><br /><h5>{this.props.item.name}</h5><br />
                        <Button style={buttonStyle}>{this.props.item.price}</Button>
                    </Jumbotron>
                </div> : null
        )

    }
}

export class WoodenToysSection extends Component {
    state = {
        Items: [],
    }

    componentDidMount() {
        axios.get('api/items')
            .then(res => {
                this.setState({ Items: res.data })
            });
    }
    render() {
        var idx = 0
        return (
            <Container style={sectionStyle}>
                <h3>Wooden Toys</h3><hr />
                <Row>
                    {
                        this.state.Items.map((item, i) => {
                            return (<div>
                                {   (item.category === "wooden toy") ?
                                    <DisplayItem item={item} key={i} id={idx++} /> : null
                                }
                            </div>)
                        })
                    }
                </Row>

            </Container>
        )
    }
}

export default connect()(WoodenToysSection);