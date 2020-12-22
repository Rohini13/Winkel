import axios from 'axios'
import React, { Component } from 'react'
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import history from '../history'

const buttonStyle1 = {
    border: "None",
    borderRadius: "20px",
    background: "hotpink",
    color: "white",
    float: 'left'
}
export class WishModal extends Component {
    state={
        wishmodal:false,
        wishlist:[],
        authorized:false,
    }
    wish = (e) => {
        axios.post(`../api/wishlist/${JSON.parse(window.localStorage.getItem('user')).id}/${this.props.id}`)
            .then(res => {
                this.setState({ wishlist: res.data, authorized:true })
            })
            .catch(err=>{
                this.setState({ authorized: false })
            })
        this.toggle()
    }
    wish1 = (e) => {
        if (window.localStorage.getItem('user') !== null) {
            axios.get(`../api/wishlist/${JSON.parse(window.localStorage.getItem('user')).id}`)
                .then(res => {
                    this.setState({ wishlist: res.data, authorized: true })
                })
                .catch(err => {
                    this.setState({ authorized: false })
                })
        }
        this.toggle()
    }
    
    toggle = () => {
        this.setState({ wishmodal: !this.state.wishmodal });
    }
    
    i=0
    render() {
        return (
            <React.Fragment>
                {this.props.purpose === 'single' ? <Button className='button' style={{ width: '120px' }} onClick={this.wish}>Wishlist</Button> : this.props.purpose === 'card' ? <Button style={buttonStyle1} onClick={this.wish}>&#9825;</Button> : <NavLink href="#" onClick={this.wish1} className="inactive" style={{ color: this.props.c }}>Wishlist</NavLink>}   
                <Modal
                    isOpen={this.state.wishmodal}
                    toggle={this.toggle}>
                    {this.props.purpose === 'navbar' ? <ModalHeader toggle={this.toggle}>Your Wishlist</ModalHeader> :<ModalHeader toggle={this.toggle}>Item added to your Wishlist</ModalHeader>}
                    <ModalBody>
                        {
                            this.state.authorized ? <div>{this.state.wishlist.map(items => (
                                <div style={{ backgroundColor: this.i++ % 2 ? 'lavenderblush' : 'white', padding: '5px' }}>
                                    <Row>
                                        <Col>
                                            <Link to={"../toydescription/" + items._id} className='link' onClick={()=>{
                                                history.push(`../toydescription/${items._id}`)
                                                this.toggle()
                                                history.go()
                                            }}>{items.name}</Link>
                                        </Col>
                                        <Col style={{ color: 'grey' }}>
                                            &#8377;  {items.price}
                                        </Col>
                                        {this.props.purpose==='navbar'?<Col>
                                            <Button style={{ borderRadius: '20px', backgroundColor: 'salmon', color: 'white', border: 'none' }} onClick={() => {
                                                axios.delete(`../api/wishlist/${JSON.parse(window.localStorage.getItem('user')).id}/${items._id}`)
                                                    .then(res => {
                                                        this.setState({ wishlist: res.data })
                                                    })
                                                this.toggle()
                                            }}>
                                                X
                                            </Button>
                                        </Col>:null}
                                    </Row>
                                </div>
                            ))}</div> : <div>Log in to add items to your wishlist</div>
                        }
                    </ModalBody>
                </Modal>
                
            </React.Fragment>
        )
    }
}

export default WishModal
