import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron,
    Row,
    Col
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../actions/authAction'
import loadingBackground from '../images/loginwall.jpg';

const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "1000x",
    height: "800px",
    backgroundImage: "url(" + loadingBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
};

const JumbotronStyle = {
    background: '#e75480',
    position: "absolute",
    width: "40%",
    borderRadius: "20px",
    padding: "25px",
    opacity: '0.9',
};

const labelStyle = {
    align: 'left',
    color: 'white',
}

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
            <div style={sectionStyle}>
                <Jumbotron style={JumbotronStyle}>
                    <h3 style={{ textAlign: 'center', color: 'white' }}>
                        REGISTER AT WINKEL ;)
                    </h3>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="username" style={labelStyle}>Username</Label>
                            <Input type="text"
                                name="username"
                                placeholder="Enter Username"
                                onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email" style={labelStyle}>Email</Label>
                            <Input type="email"
                                name="email"
                                placeholder="Enter Email"
                                onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" style={labelStyle}>Password</Label>
                            <Input type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="hno" style={labelStyle}>House No.</Label>
                                    <Input type="string"
                                        name="hno"
                                        placeholder="Enter house no"
                                        onChange={this.onChange} />
                                </Col>
                                <Col>
                                    <Label for="city" style={labelStyle}>City</Label>
                                    <Input type="string"
                                        name="city"
                                        placeholder="Enter city name"
                                        onChange={this.onChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label for="state" style={labelStyle}>State</Label>
                                    <Input type="string"
                                        name="state"
                                        placeholder="Enter state"
                                        onChange={this.onChange} />
                                </Col>
                                <Col>
                                    <Label for="pincode" style={labelStyle}>Pincode</Label>
                                    <Input type="string"
                                        name="pincode"
                                        placeholder="Enter pin code"
                                        onChange={this.onChange} />

                                </Col>


                            </Row>

                        </FormGroup>
                        <Button className='button' style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', }} >
                            Register
                    </Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired,
}

export default connect(null, { register })(RegisterPage)