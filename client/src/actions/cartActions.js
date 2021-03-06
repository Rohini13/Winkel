import {DISPLAY_CART, ADD_ITEM, DELETE_ITEM, GET_ITEMS} from './types'
import axios from 'axios'

export const setDisplayCart = () => {
    return {
        type: DISPLAY_CART
    }
};

export const getItems = () => dispatch => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user == null)
    return;
    axios.get(`../api/cart/${user.id}`)
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        }
        )
        .catch(err => console.log(err));
    
};

export const addItem = (itemid) => (dispatch, getState) => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if(user == null)
    return;
    axios.post(`../api/cart/${user.id}/${itemid}`)
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })}
        )
        .catch(err => console.log(err));

};

export const deleteItem = (itemid) => (dispatch, getState) => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if(user == null)
    return;
    console.log("heyyyy")
    axios.delete(`../api/cart/${user.id}/${itemid}`).then(res => {
        console.log("hollaaa")
        dispatch({
            type: DELETE_ITEM,
            payload: itemid
        })}
    )
    .catch(err => console.log(err));

};
