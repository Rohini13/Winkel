import React, { Component } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import { connect } from 'react-redux'
import {getItems, setDisplayCart} from '../actions/cartActions'
import PropTypes from 'prop-types';

class DisplayCart extends Component {
    render() {
        var total = 0
        var items = this.props.items
        var i;
        for(i=0;i<items.length; i++)
        {
            console.log(items[i])
            console.log(total)
            total += parseInt(items[i].price)
        }
        return(
            <div><ol>
                {Array.from(items).map(item => {
                    return (
                    <li>{item.name}</li>
                    )
                })}
            </ol>{total}</div>
        );
    }
}

export class CartModal extends Component {

    state = {
        cartitems: {},
        modal: false
    }

    componentDidMount() {
        this.props.setDisplayCart()
        this.props.getItems()
        this.setState({cartitems: this.props.cartitems})
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.props.setDisplayCart}
                >
                    <ModalHeader toggle={this.toggle}>
                        Your cart
                    </ModalHeader>
                    <ModalBody>
                        {
                            window.localStorage.getItem('user')!==null ? <div><DisplayCart items={this.state.cartitems}/></div> : <div>Please login to add items to the cart</div>
                        }
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

CartModal.propTypes = {
    getItems: PropTypes.func.isRequired,
    cartitems: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cartitems: state.cart.cartitems,
    displayCart: state.cart.displayCart
});

export default connect(mapStateToProps, {getItems, setDisplayCart})(CartModal);
