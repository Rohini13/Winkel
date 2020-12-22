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


export class WishModal2 extends Component {
    state = {
        wishmodal: false,
        wishlist: [],
        authorized:false,
    }
    
    wish = (e) => {
        if (window.localStorage.getItem('user') !== null) {
        axios.get(`../api/wishlist/${JSON.parse(window.localStorage.getItem('user')).id}`)
            .then(res => {
                this.setState({ wishlist: res.data, authorized: true })
            })
            .catch(err => {
                this.setState({ authorized: false })
            })
        }
        this.toggle1()
    }

    toggle1 = () => {
        this.setState({ wishmodal: !this.state.wishmodal });
    }
    i = 0
    render() {
        return (
            <React.Fragment>
                <NavLink href="#" onClick={this.wish} className="inactive" style={{ color: this.props.c }}>Wishlist</NavLink>
                <Modal
                    isOpen={this.state.wishmodal}
                    toggle={this.toggle1}>
                    <ModalHeader toggle={this.toggle1}>
                        Your Wishlist
                   </ModalHeader>
                    <ModalBody>
                        {
                            this.state.authorized ? <div>{this.state.wishlist.map(items => (
                                <div style={{ backgroundColor: this.i++ % 2 ? 'lavenderblush' : 'white', padding: '5px' }}>
                                    <Row>
                                        <Col>
                                            <Link to={"../toydescription/" + items._id} className='link' onClick={() => {
                                                history.push(`../toydescription/${items._id}`)
                                                this.toggle1()
                                                history.go()
                                            }}>{items.name}</Link>
                                        </Col>
                                        <Col style={{ color: 'grey' }}>
                                            &#8377;  {items.price}
                                        </Col>
                                        <Col>
                                            <Button style={{ borderRadius:'20px', backgroundColor:'salmon', color:'white', border:'none' }} onClick={() => {
                                                axios.delete(`../api/wishlist/${JSON.parse(window.localStorage.getItem('user')).id}/${items._id}`)
                                                    .then(res => {
                                                        this.setState({ wishlist: res.data })
                                                    })
                                                this.toggle1()
                                            }}>
                                                X
                                            </Button>
                                        </Col>
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

export default WishModal2
