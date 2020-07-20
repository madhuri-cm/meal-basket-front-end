import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import Select from 'react-select'
import {startAddCustomize} from '../actions/customizeAction'
import {Link} from 'react-router-dom'
       
class Customize extends Component {
  constructor(props) {
    super() 
      this.state ={
        
        no_of_days:props.customise?props.customise.no_of_days:null,
        options:[],
        selectedExclude:null,
        selectedAllergy:null,
        allergy:'',
        mealsType:["Breakfast","Lunch","Dinner"],
        checked:null,
        meal:[],
        

        
      }
      
    
  } 
  options() { 
    if(this.props.exclude.length > 0) {
      return (this.props.exclude.map(exclude => ({ label: exclude.name, value: exclude.name })))
    }
}  

allergyOptions() {
  if(this.props.allergy.length > 0) {
    return (this.props.allergy.map(allergy=>({label:allergy.name,value:allergy.name })))
  }
}

handleCheckbox = (e) => {

    if(e.target.checked){
        this.state.meal.push(e.target.value)   
    }else{
        this.state.meal.splice(e.target.value, 1);
    }
    
}

  handleSelectChange = (selectedExclude) => {
    this.setState({ 
      selectedExclude: selectedExclude
    });
  }
  handleSelectAllergyChange = (selectedAllergy) =>{
    this.setState({selectedAllergy})
  }
  handleChange = (e) => {
    this.setState({
      
      no_of_days:e.target.value,
      checked:!this.state.checked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.checked) {
      console.log(e.target.value)
    }
    const formData = {
      exclude:this.state.selectedExclude.map(selectedValue=>{
        return selectedValue.value
      }),
      allergy:this.state.selectedAllergy.map(selectedValue=>{
        return selectedValue.value
      }),
      meal:this.state.meal,
      no_of_days:this.state.no_of_days,
      meal_plan:this.props.match.params.id
      
    }

    const redirect = () => {
      return (
        this.props.history.push('/meal-plans/review')
      )
    }

    this.props.dispatch(startAddCustomize(formData,redirect))
   
   
   
    
  }

  render() {
  
 
   
    return (
      <div >
        <section className="customize-section">
        <Form className="customize-form" onSubmit={this.handleSubmit} > 
        {this.props.plan ? <h2>{this.props.plan.name} plan Customization</h2> : <div>Loading...</div>} 
            <Form.Label>Select the meal</Form.Label>
            <Form.Group>
                   <Form.Label className="btn btn-customize">
                   <input type="checkbox" name="meal" value="Breakfast" onChange={this.handleCheckbox} /> Breakfast
                   </Form.Label>

                   <Form.Label className="btn btn-customize">
                   <input type="checkbox" name="meal" value="Lunch" onChange={this.handleCheckbox} /> Lunch
                   </Form.Label>

                   <Form.Label className="btn btn-customize">
                   <input type="checkbox" name="meal" value="Dinner"  onChange={this.handleCheckbox} /> Dinner
                   </Form.Label>
            </Form.Group>
            <Form.Label>Select no. of meals per week</Form.Label>
            <Form.Group>
            <Form.Label className="btn btn-customize">
            <input type="radio" name="no_of_days"   value="5 Days" onChange={this.handleChange} /> 5 Days
            </Form.Label>

            <Form.Label className="btn btn-customize">
            <input type="radio" name="no_of_days"  value="7 Days" onChange={this.handleChange} /> 7 Days
            </Form.Label>
            
            </Form.Group>
            
            {

            this.props.plan  && this.state.no_of_days != null ?
            
            <div className="customize-price">
              <p>Price per meal  -   {this.props.plan.price}</p> <hr className="customize-line" />
              <p>weekely total  - {this.state.no_of_days == "5 Days" ?  this.props.plan.price * 5 * this.state.meal.length  : this.props.plan.price * 7 * this.state.meal.length }</p> <hr className="customize-line" />
              
              
              
            </div>
            :
            null
            }
        <Form.Group>
          <Form.Label>You can select Ingredients to exclude from the meal plan</Form.Label>
          <Select name="exclude" options={this.options()} isMulti onChange={this.handleSelectChange} value={this.state.selectedExclude}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Do you have any Allergy Preferences</Form.Label>
          <Select  name="allergy" options={this.allergyOptions()} isMulti onChange={this.handleSelectAllergyChange} value={this.state.selectedAllergy} />
        </Form.Group>
        <input className="btn btn-customize" type="submit" value="Continue" />
        </Form>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  
  const id = props.match.params.id
  return {
    exclude:state.exclude,
    allergy:state.allergy,
    plan:state.plan.find(plan=>plan._id == id)
  }
}

   
export default connect(mapStateToProps)(Customize)