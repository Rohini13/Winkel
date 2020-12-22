import {DISPLAY_CART, ADD_ITEM, DELETE_ITEM, GET_ITEMS} from '../actions/types'

const initialState = {
    cartItems: [],
    displayCart: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
                displayCart: true
            };
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id!==action.payload),
                displayCart: true
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
                displayCart: true
            }
        case DISPLAY_CART:
            return {
                ...state,
                displayCart: !state.displayCart
            }
        default:
            return state;
    }
}