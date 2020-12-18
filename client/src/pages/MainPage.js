import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import LandingSection from '../components/LandingSection';
import { connect } from 'react-redux'

export class MainPage extends Component {

    render() {
        return (
            <div className='container'>
                <LandingSection />
                
            </div>
        )
    }
}

export default connect()(MainPage)