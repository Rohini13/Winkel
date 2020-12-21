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
import { Link } from 'react-router-dom';


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
        cartitems: []
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
            return;
        } else {
            const user = window.localStorage.getItem('user');
            axios.post(`api/cart/${user._id}/${this.state.itemID}`)
            .then(res => {
                this.setState({cartitems: res.data})
            });
        }
        this.setState({modal: !this.state.modal});

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
                            <Link to="/allitems" className='link'>All Toys </Link>&rarr;
                    <Link className='link'to={this.state.Item.category === 'stuffed animal' ? '/stuffedanimals' : '/woodentoys'}> {this.state.Item.category === 'stuffed animal'?'Stuffed Animals': 'Wooden Toys'} </Link>
                    &rarr;
                    <Link className='link'to='#'> {this.state.Item.name} </Link>
                    </span>
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
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
               >
                   <ModalHeader toggle={this.toggle}>
                       Your cart
                   </ModalHeader>
                   <ModalBody>
                       {
                           window.localStorage.getItem('user')!==null ? <div>{this.state.cartitems}</div> : <div>Not logged in</div>
                       }
                   </ModalBody>

               </Modal>
                
            </div>
        )
    }
}

export default connect()(Toy)
