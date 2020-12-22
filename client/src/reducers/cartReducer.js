import {DISPLAY_CART, ADD_ITEM, DELETE_ITEM, GET_ITEMS} from '../actions/types'

const initialState = {
    cartItems: {},
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
            const ind = state.cartItems.findIndex(item => item._id === action.payload)
            return {
                ...state,
                cartItems: [...state.cartItems.slice(0, ind),
                            ...state.cartItems.slice(ind + 1)],
                displayCart: true
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                //CartItems: action.payload,
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