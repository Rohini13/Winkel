import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../actions/authAction'

export class RegisterPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        hno: '',
        city: '',
        state: '',
        pincode: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { username, email, password, hno, city, state, pincode } = this.state
        const newUser = {
            username, email, password, address: { hno, city, state, pincode }
        }
        this.props.register(newUser)
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="hno">House No.</Label>
                        <Input type="string"
                            name="hno"
                            placeholder="Enter house no"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="string"
                            name="city"
                            placeholder="Enter city name"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input type="string"
                            name="state"
                            placeholder="Enter state"
                            onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="pincode">Pincode</Label>
                        <Input type="string"
                            name="pincode"
                            placeholder="Enter pin code"
                            onChange={this.onChange} />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} block>
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired,
}

export default connect(null, { register })(RegisterPage)