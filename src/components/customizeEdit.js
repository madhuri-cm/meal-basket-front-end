import React from 'react'
import Customize from './customize'
import {connect} from 'react-redux'
import {withRouter } from 'react-router'



class CustomizeEdit extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Customize  />
            </div>
        )
    }
}


export default withRouter(connect()(CustomizeEdit))