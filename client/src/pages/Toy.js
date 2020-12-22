import axios from 'axios'
import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {CartModal} from '../components/CartModal'
import {addItem, setDisplayCart} from '../actions/cartActions'


const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    backgroundColor: 'lavenderblush' ,
    padding: '100px',
};

const JumbotronStyle = {
    background: 'white',
    width: "100%",
    borderRadius: "25px",
    padding: "30px",
    opacity: '0.9',
};

const JumbotronStyle1 = {
    background: 'white',
    width: "100%",
    borderRadius: "50px",
    padding: "15px",
    opacity: '0.7',
};
const spanStyle = {
    float: "left",
}

const LinkStyle = {
    color: "hotpink",
}

export class Toy extends Component {
    state={
        Item:{
            name:'',
            image:'',
            price: '',
            category: '',
            description: '',
        },
        itemID: null,
        modal: false,
        cartitems: {}
    }

    componentDidMount() {
        console.log(this.props.id)
        this.setState({itemID: this.props.id});
        axios.get(`../api/items/${this.props.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ Item: res.data })
                console.log(this.state.Item)
            });
    }

    addToCart = () => {
        if(window.localStorage.getItem('user') == null) {
            console.log("No user");
        } else {
            // const user = JSON.parse(window.localStorage.getItem('user'));
            // console.log(user);
            // axios.post(`../api/cart/${user._id}/${this.state.itemID}`)
            // .then(res => {
            //     console.log(res.data)
            //     this.setState({cartitems: /*JSON.stringify(*/res.data/*)*/})
            // });
            this.props.addItem(this.state.itemID);

        }
        this.props.setDisplayCart();

    }

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }

    render() {
        return (
            <div style={sectionStyle}>
                <Row>
                    <Jumbotron style={JumbotronStyle1}>
                        <span style={spanStyle}>
                            <Link to="/allitems" style={LinkStyle}>All Toys</Link>|
                    <Link to="/stuffedanimals" style={LinkStyle}> Stuffed Animals </Link>|
                    <Link to="/woodentoys" style={LinkStyle}> Wooden Toys </Link></span>
                    </Jumbotron>
                    <Jumbotron style={JumbotronStyle}>
                        <Row style={{ float: 'left', alignItems: 'center' }}>
                            <Col >
                                <h2>
                                    {this.state.Item.name}
                                </h2>
                                <p>
                                    {this.state.Item.description}
                                </p>
                                <h2 style={{ color: 'deeppink' }}>
                                    &#8377; {this.state.Item.price}
                                </h2>
                                <br />
                                <Button className='button' style={{ width: '120px' }} onClick={this.addToCart}>Add to Cart</Button>
                                <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                                <Button className='button' style={{ width: '120px' }}>Wishlist</Button>
                            </Col>
                            <Col>
                                <img src={require(`../${this.state.Item.image}`).default} width='400px'></img>
                            </Col>

                        </Row>
                    </Jumbotron>


                </Row>
                <CartModal />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    displayCart: state.displayCart
})

export default connect(mapStateToProps, {addItem, setDisplayCart})(Toy)
