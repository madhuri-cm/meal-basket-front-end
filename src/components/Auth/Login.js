import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { startLoginUser } from '../../actions/userAction'
import { connect } from 'react-redux'

class UserRegister extends React.Component {
    constructor() {
        super()
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }
        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })

        }

        handleSubmit = (e) => {
            e.preventDefault()
            const loginData={
               
                email:this.state.email,
                password:this.state.password
            }
            const redirect = () => {
                return this.props.history.push('/')
            }
            console.log(loginData)
            
            this.props.dispatch(startLoginUser(loginData,redirect))
            
        }
    
    render() {
        return (
            <section className="login-section">
            
                <div >
               <Form  onSubmit={this.handleSubmit} className="register-form">
                   <h2>Sign Up</h2>
                   
                    <Form.Group controlId="formBasicEmail">
                       
                        <Form.Control type="email" placeholder="E-mail address" name="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                            
                    <button className="register-btn btn-lg btn-block" type="submit">
                        Submit
                    </button>
                    <br/>
                    <p><center>Don't have an Account ? <Link>Sign Up</Link></center></p>

                </Form>
                </div>

           
            
            </section>
            )
    }
}

export default connect()(UserRegister)