import axios from 'axios';
import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mainStyle = {
    marginTop: "8rem"
}

const JumbotronStyle = {
    background: "F5F5F5",
    marginTop: "3.5rem",
    marginLeft: "5rem",
    width: "12rem",
    borderRadius: "20px",
    padding: "10px",
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

const spanStyle = {
    float: "right",
    marginTop: "-1.5rem"
}

const LinkStyle = {
    color: "#0000A0",
}


class DisplayItem extends Component {

    render() {
        return (
            <div>
                <Jumbotron  style={ JumbotronStyle }>
                    <img src={require(`../${this.props.item.image}`).default} style={imageStyle}></img>
                    <br /><br /><h5>{this.props.item.name}</h5><br />
                    <Button className='btn' style={buttonStyle}>{this.props.item.price}</Button>
                </Jumbotron>
            </div>
        )
    }
}

export class AllItemsPage extends Component {

    state = {
        Items: []
    }

    componentDidMount() {
        axios.get('api/items')
            .then(res => {
                this.setState({Items: res.data})
            });
    }

    render() {

        return (
            <div className='container' style={mainStyle}>
                <h3>All Items</h3>
                <span style={spanStyle}>
                    <Link to="/allitems" style={LinkStyle}>All Items </Link>| 
                    <Link to="/stuffedanimals" style={LinkStyle}> Stuffed Animals </Link>| 
                    <Link to="/woodentoys" style={LinkStyle}> Wooden Toys </Link></span><hr />
                <Row>
                {
                    
                    this.state.Items.map((item, i) => {
                         return (<div>
                            {
                                <DisplayItem item={item} key={i} />
                            }
                        </div>)
                    })
                }</Row>
            </div>
        )
    }
}

export default connect()(AllItemsPage)