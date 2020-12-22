import React, { Component } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    Table,
    Button
} from 'reactstrap';
import { connect } from 'react-redux'
import {getItems, setDisplayCart, deleteItem, addItem} from '../actions/cartActions'
import PropTypes from 'prop-types';

const buttonStyle = {
    backgroundColor: "#F5F5F5",
    border: "None",
    color: "black"
}

class DisplayCart extends Component {

    decreaseQty = (e) => {
        this.props.deleteItem(e.target.value)
    }

    increaseQty = (e) => {
        this.props.addItem(e.target.value)
    }

    render() {
        var total = 0
        var items = this.props.items
        var i;
        for(i=0;i<items.length; i++)
        {
            total += parseInt(items[i].price)
        }
        var counts = {};
        for (var i = 0; i < items.length; i++) {
            counts[items[i]._id] = 1 + (counts[items[i]._id] || 0);
        }
        try{
            let uniqueItems = [...new Map(items.map(item => [item['_id'], item])).values()];
        
            return(
                <div>
                    <Table>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                            {uniqueItems.map((item,i) => {
                                return (
                                <tr>
                                <td><img src={require(`../${item.image}`).default} style={{width: "30px"}}></img>  {item.name}</td>
                                <td><Button size="sm" style={buttonStyle} onClick={this.decreaseQty} value={item._id}>-</Button> {counts[uniqueItems[i]._id]} <Button size="sm" style={buttonStyle} onClick={this.increaseQty} value={item._id}>+</Button></td>
                                <td>{item.price}</td>
                                </tr>
                                )
                            })}
                        <tr style={{color: "green"}}><td></td><td><b>Total : </b></td><td><b>{total}</b></td></tr>
                    </Table>
                    </div>
            );
        } catch(err) {
            return (
            <div>Please login to make changes to the cart</div>
            )
        }
    }
}

export class CartModal extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                {console.log(this.props.cartItems)}
                <Modal
                    isOpen={this.props.displayCart}
                    toggle={this.props.setDisplayCart}
                >
                    <ModalHeader toggle={this.toggle}>
                        Your cart
                    </ModalHeader>
                    <ModalBody>
                        {
                            window.localStorage.getItem('user')!==null ? <div><DisplayCart items={this.props.cartItems} deleteItem={this.props.deleteItem} addItem={this.props.addItem}/></div> : <div>Please login to add items to the cart</div>
                        }
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

CartModal.propTypes = {
    getItems: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cartItems: state.cart.cartItems,
    displayCart: state.cart.displayCart
});

export default connect(mapStateToProps, {getItems, setDisplayCart, deleteItem, addItem})(CartModal);
