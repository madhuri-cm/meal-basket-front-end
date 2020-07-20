import React from 'react'
import { Form } from 'react-bootstrap'
import {connect} from 'react-redux'
import {  startAddItem } from '../../actions/itemAction'
import { withRouter } from 'react-router-dom'



class ItemForm extends React.Component {
    constructor() {
        super ()
        this.state = {
            name:'',
            price:'',
            ingredients:'',
            description:'',
            nutrition_facts:'',
            category:'',
            image:null
        }
        
    }
    handleChange = (e) => {
        if(e.target.type == 'file') {
            this.setState({image:e.target.files[0]})
        } else {
        
            this.setState({
            
                [e.target.name]:e.target.value
            })

        
        }
         
       
    }

   
    
    
    handleSubmit = (e) => {
       
        e.preventDefault()
        const formData = new FormData()
        formData.append('image',this.state.image)
        formData.append('name',this.state.name)
        formData.append('price',this.state.price)
        formData.append('description',this.state.description)
        formData.append('ingredients',this.state.ingredients)
        formData.append('nutrition_facts',this.state.nutrition_facts)
        formData.append('category',this.state.category)
        const redirect = () => {
            this.props.history.push('/menu')
        }
        console.log(formData)
        this.props.dispatch(startAddItem(formData,redirect))
        
    }
    render() {
        return(
            <div>
                <section className="add-item">
                <Form onSubmit={this.handleSubmit} className="register-form" >
                    <h2>Add Item Details</h2>
                <Form.Group controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter the Item Price" name="price" value={this.state.price} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formControlSelect">
                    <Form.Control as="select" placeholder="select" name="category" value={this.state.category} onChange={this.handleChange}> 
                        <option value="">Category</option>
                        {this.props.category.map((category,index)=>{
                            return <option key={index} value={category._id}>{category.name}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicTextarea">
                <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows="4" type="text" placeholder="Enter Item Ingredients" name="ingredients" value={this.state.ingredients} onChange={this.handleChange}/>
                </Form.Group>
               
                <Form.Group controlId="formBasicTextarea">
                <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="4" type="text" placeholder="Enter Item description" name="description" value={this.state.description} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicTextarea">
                <Form.Label>Nutrition Facts</Form.Label>
                    <Form.Control as="textarea" rows="4" type="text" placeholder=" Enter Item Nutrition Facts" name="nutrition_facts" value={this.state.nutrition_facts} onChange={this.handleChange}/>
                </Form.Group>

               

                <Form.Group controlId="formControlFile">
                    <Form.File type='file' name="image"  onChange={this.handleChange} />
                </Form.Group>

                <button className="register-btn btn-lg btn-block" type="submit">
                        Submit
                </button>


  


                </Form>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category:state.category
    }
}

export default withRouter(connect(mapStateToProps)(ItemForm)) 