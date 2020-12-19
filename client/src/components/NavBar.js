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
import logop from '../images/logop.png'
import logow from '../images/logow.png'



export class NavBar extends Component {
    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "yellowgreen", tg: 'white' , logo:logow});
        } else {
            this.setState({ bg: "transparent", tg: "#e75480" , logo: logop});
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    state = { isOpen: false,
    bg:'transparent',
        tg: '#e75480', 
    logo: logop,
 }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" expand="md" /* className="mb-5"*/ style={{ backgroundColor: this.state.bg, color: this.state.tg, opacity:0.9}}>
                    <Container>
                        <NavbarBrand href="/main"><img className='logo'src={this.state.logo} width='70px'/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar  >
                            <NavItem>
                                    <NavLink href="/allitems" className='inactive' style={{ color: this.state.tg }}>Catalog</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" style={{ color: this.state.tg }}>Delivery</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" style={{ color: this.state.tg }} >About</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink href="#" className="inactive" style={{ color: this.state.tg }}>Contact</NavLink>
                            </NavItem>
                        </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#" className="inactive" style={{ color: this.state.tg }}> 
                                    Cart
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register" className="inactive" style={{ color: this.state.tg }}>
                                        Register
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/login" className="inactive" style={{ color: this.state.tg }}>
                                        Login
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/logout" onClick={this.props.logout} className="inactive" style={{ color: this.state.tg }}>
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
