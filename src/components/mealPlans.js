import React from 'react'
import { connect } from 'react-redux'
import { Card,Button} from 'react-bootstrap'

import { BsInfoCircle } from 'react-icons/bs'
import Popup from "reactjs-popup";
import { Link } from 'react-router-dom'



class MealPlans extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <section  className="meal-plan-section" >
            
             <h2>we cater for your diet. Select a meal place</h2>

             { this.props.plan.length == 0 ? <h2>Loading.......</h2> :
              <div className="row meal-plan" >
             
                {
                  this.props.plan.map((plan,i)=>{
                    return (
                    <div style={{paddingLeft:'10px', paddingRight:'10px'}} className="meal-plan">
                   
                   
                    
                      <Card className="meal-plan-card">
                      <Card.Img variant="top" src={`../uploads/${plan.image}`} />
                      <Card.Body>
                      <Popup trigger={  <Link><BsInfoCircle className="info-icon" /></Link> } position="top center">
                      <div  className="popup">
                       <b>Average Macro :</b><br/> {plan.average_macro} 
                       <br/> <br/>
                       <b>INGREDIENTS:</b> <br />
                       {plan.ingredients}
                      </div>
                    </Popup>
                        <Card.Title><center><b>{plan.name}</b></center></Card.Title>
                        <div className="meal-plan-wrapper">
                        <Link to={`/meal-plans/customize/${plan._id}`}><button className="meal-plan-btn" >Select {plan.name}</button></Link>
                        </div>
                        <Card.Text><center>{plan.price}/Meal</center></Card.Text>
                        <Card.Text className="meal-plan-description">{plan.description}</Card.Text>
                       
                        
                      
                      </Card.Body>
                    </Card>
                   
                    </div>
                    )
                  })
                }
              

              </div>
    }
          
            </section>
        )
        
        
       
       
    }
}

const mapStateToProps = (state) => {
    
    console.log(state)
    return {
        plan:state.plan
    }
} 

export default connect(mapStateToProps)(MealPlans)