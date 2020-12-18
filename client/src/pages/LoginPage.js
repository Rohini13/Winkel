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
import { login } from '../actions/authAction'

export class LoginPage extends Component {
    state = {
        username: '',
        password: '',
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
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
                        <Label for="password">Password</Label>
                        <Input type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={this.onChange} />
                    </FormGroup>
                    <Button color="dark" style={{ marginTop: '2rem' }} block>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage)
