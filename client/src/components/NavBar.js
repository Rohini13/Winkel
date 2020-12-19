import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../actions/authAction'
import logo from '../images/logo.png'



export class NavBar extends Component {
    state = { isOpen: false }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar class="navbar" fixed="top" expand="md" /* className="mb-5"*/ >
                    <Container>
                        <NavbarBrand href="/main"><img src={logo} width='100px'/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                    <NavLink href="#" className="inactive" exact activeClassName="active">Catalog</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" activeClassName="active">Delivery</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" activeClassName="active">About</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" activeClassName="active">Contact</NavLink>
                            </NavItem>
                        </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#" className="inactive" activeClassName="active"> 
                                    Cart
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register" className="inactive" activeClassName="active">
                                        Register
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/login" className="inactive" exact activeClassName="active">
                                        Login
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/logout" onClick={this.props.logout} className="inactive" activeClassName="active">
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
}

export default connect(null, { logout })(NavBar)
