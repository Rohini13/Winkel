import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/authAction'
import loadingBackground from '../images/loginwall.jpg';

const sectionStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    width: "1000x",
    height: "600px",
    backgroundImage: "url(" + loadingBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
};

const JumbotronStyle = {
    background: '#e75480',
    width: "50%",
    borderRadius: "20px",
    padding: "25px", 
    opacity: '0.9',
};

const labelStyle ={
    align: 'left',
    color:'white',
}

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
            <div style={sectionStyle}>
                <Jumbotron style={JumbotronStyle}>
                    <h3 style={{textAlign:'center', color:'white'}}>
                        LOGIN TO WINKEL ;)
                    </h3>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup style={labelStyle}>
                            <Label for="username">USERNAME</Label>
                            <Input type="text"
                                name="username"
                                placeholder="Enter Username"
                                onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup style={labelStyle}>
                            <Label for="password">PASSWORD</Label>
                            <Input type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={this.onChange} />
                        </FormGroup>
                        <Button className='button' style={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center', }} >
                            Login
                    </Button>
                    </Form>
                </Jumbotron>

            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage)
