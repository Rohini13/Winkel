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
import WishModal from '../components/WishModal';

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
    float: 'right'
}


const spanStyle = {
    float: "right",
    marginTop: "-1.5rem"
}

class DisplayItem extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={JumbotronStyle}>
                    <WishModal purpose={'card'} id={this.props.item._id} />
                    <Button href={"/toydescription/" + this.props.item._id} style={buttonStyle}>View</Button>
                    <img src={require(`../${this.props.item.image}`).default} style={imageStyle}></img>
                    <br /><br /><h5>{this.props.item.name}</h5>
                    <h5 style={{ color: 'hotpink' }}>
                        &#8377;{this.props.item.price}
                    </h5><br />
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
                <h3>All Toys</h3>
                <span style={spanStyle}>
                    <Link to="/allitems" className='link'>All Toys </Link>| 
                    <Link to="/stuffedanimals" className='link'> Stuffed Animals </Link>| 
                    <Link to="/woodentoys" className='link'> Wooden Toys </Link></span><hr />
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