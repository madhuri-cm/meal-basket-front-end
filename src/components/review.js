import React from 'react'
import { connect } from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import { FiEdit2 } from "react-icons/fi"
import { BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
import {startRemoveCustomize} from '../actions/customizeAction'



class Review extends React.Component {
   
    handleRemove = (id) => {
        this.props.dispatch(startRemoveCustomize(id))
    }
    render () {
        console.log(this.props.plan)
        return (
            <div>
                <section className="plan-summary-section">
                <h1>Plan Summary</h1>
                <div className="plan-summary">
                    {this.props.customize.map((customize,i)=>{
                        const plan = this.props.plan.find(plan=>plan._id == customize.meal_plan)
                    
                        return(
                            <Card className="plan-summary-card" key={i} > 
                                <Card.Body>
                                <div>
                                <Card.Title className="review-heading">Weekely Meal Plan 
                                <div  className="plan-summary-edit" style={{float:"right"}}>
                               <Link> <BsTrash onClick={()=>{
                                   this.handleRemove(customize._id)
                               }} /></Link>
                                </div>
                                </Card.Title> 
                                </div>
                                <hr className="plan-summary-line" />
                                        <Card.Text className="plan-summary-name"  style={{color:'#E95E3E',fontSize:'20px'}}> Plan 
                                            <div style={{float:"right"}}> Price </div><br />
                                         {plan? plan.name : null}
                                        </Card.Text>
                                        <Card.Text>
                                        
                                        {customize.meal.map((meal,i)=>{
                                            return (
                                                
                                            <Card.Text key={i} style={{display:'inline'}}>{meal}{'   '} </Card.Text>
                                                    
                                            )
                                        })}

                                    
                                           
                                        </Card.Text>
                                        <Card.Text>
                                            {
                                                customize.no_of_days == "5 Days"? customize.meal.length * 5 :customize.meal.length * 7
                                            } Meals per week
                                        </Card.Text>
                                        <hr />
                                </Card.Body>
                            </Card>

                        )
                    })}
                
                </div>
                </section>
                
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    
    return {
        customize:state.customize,
        plan:state.plan
    }
}
export default connect(mapStateToProps)(Review)