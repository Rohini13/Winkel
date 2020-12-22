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
        console.log(items)
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
                            window.localStorage.getItem('user')!==null ? <div><DisplayCart items={this.props.cartItems}/></div> : <div>Please login to add items to the cart</div>
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
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cartItems: state.cart.cartItems,
    displayCart: state.cart.displayCart
});

export default connect(mapStateToProps, {getItems, setDisplayCart})(CartModal);
