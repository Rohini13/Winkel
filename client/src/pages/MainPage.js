import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import LandingSection from '../components/LandingSection';
import CategorySection from '../components/CategorySection';
import { connect } from 'react-redux'

const mainStyle = {
    background: "None"
}

export class MainPage extends Component {

    render() {
        return (
            <div className='container' style={mainStyle}>
                <LandingSection />
                <CategorySection />
            </div>
        )
    }
}

export default connect()(MainPage)