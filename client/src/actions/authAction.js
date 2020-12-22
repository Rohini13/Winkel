import axios from 'axios'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
} from './types'

import history from '../history'


export const register = ({ username, email, password, address }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, password, address })
    axios.post('/api/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            history.push('/registered')
            history.go(0)
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const login = ({ username, password }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password })
    axios.post('/api/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            history.push('/main')
            history.go(0)
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {
    return ({
        type: LOGOUT_SUCCESS
    })
}