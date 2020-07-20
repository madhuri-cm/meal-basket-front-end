import React from 'react'
import {connect} from 'react-redux'
import { Card,Button} from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import Popup from "reactjs-popup";
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  
    render () {
        return (
            <div>
              
                <div className="row meal-plan" >
                 

        
             

           </div>
 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item:state.item,
        category:state.category
    }
}

export default connect(mapStateToProps)(Profile)