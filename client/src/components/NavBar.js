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
    DropdownMenu,
    DropdownItem,
    Dropdown, DropdownToggle,
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../actions/authAction'
import logop from '../images/logo2p.png'
import logow from '../images/logo2w.png'
import user from '../images/user.jpg'
import WishModal from './WishModal';
import {setDisplayCart} from '../actions/cartActions'
import { CartModal } from './CartModal';


export class NavBar extends Component {

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "pink", tg: 'white', logo: logow });
        } else {
            this.setState({ bg: "beige", tg: "#e75480", logo: logop });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    state = {
        isOpen: false,
        dropdownOpen: false,
        bg: 'beige',
        tg: '#e75480',
        logo: logop,
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggle1 = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleCart = () => {
        this.props.setDisplayCart()
    }

    render() {
        return (
            <div>
                <Navbar fixed="top" expand="md" style={{ backgroundColor: this.state.bg, color: this.state.tg, opacity: 0.9 }} light>
                    <Container>
                        <NavbarBrand href="/"><img className='logo' src={this.state.logo} width='100px' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar  >
                                <NavItem>
                                    <NavLink href="/allitems" className='inactive' style={{ color: this.state.tg }}>Catalog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/delivery" className="inactive" style={{ color: this.state.tg }}>Delivery</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {window.localStorage.getItem('user') ?
                                    <React.Fragment>
                                        <NavItem>
                                            <NavLink href="#" onClick={this.toggleCart} className="inactive" style={{ color: this.state.tg }}>
                                                Cart
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <WishModal purpose={'navbar'}c={this.state.tg}/>
                                        </NavItem>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle1}>
                                            <DropdownToggle color='light' style={{ color: this.state.tg, backgroundColor: this.state.bg, border:'None', fontSize:'18px' }} caret>
                                                <img src={user} width='30px' />
                                            </DropdownToggle>
                                            <DropdownMenu style={{backgroundColor:'lavenderblush', opacity:'0.8'}}>
                                                <DropdownItem style={{ backgroundColor: 'lavenderblush' }}>
                                                    <NavLink href="#" className="inactive1" style={{ color: 'deeppink' }}>
                                                        {JSON.parse(window.localStorage.getItem('user')).username}'s Profile
                                                    </NavLink>
                                                </DropdownItem>
                                                <DropdownItem style={{ backgroundColor: 'lavenderblush' }}>
                                                    <NavLink href="#" className="inactive1" style={{ color: 'deeppink' }}>
                                                        Orders
                                                    </NavLink>
                                                </DropdownItem>
                                                <DropdownItem style={{ backgroundColor: 'lavenderblush' }}>
                                                    <NavLink href="/" onClick={this.props.logout} className="inactive1" style={{ color: 'deeppink' }}>
                                                        Logout
                                                    </NavLink>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </React.Fragment>
                                     : 
                                     <React.Fragment>
                                        <NavItem>
                                            <NavLink href="/login" className="inactive" style={{ color: this.state.tg }}>
                                                Login
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/register" className="inactive" style={{ color: this.state.tg }}>
                                                    Register
                                            </NavLink>
                                        </NavItem>
                                    </React.Fragment>}
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
    setDisplayCart: PropTypes.func.isRequired,
}

export default connect(null, { logout, setDisplayCart })(NavBar)
