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
                <Navbar fixed="top" color="light" light expand="md"/* className="mb-5"*/>
                    <Container>
                        <NavbarBrand href="/">Winkel</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="#">Catalog</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">Delivery</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">Contact</NavLink>
                            </NavItem>
                        </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        Cart
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register">
                                        Register
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/login">
                                        Login
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/logout" onClick={this.props.logout}>
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
