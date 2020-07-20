import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { startRegisterUser } from '../../actions/userAction'
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
            const registerData={
                username:this.state.username,
                email:this.state.email,
                password:this.state.password
            }
            const redirect = () => {
                return this.props.history.push('/login')
            }
            
            
        }
    
    render() {
        return (
            <section className="login-section">
            
                <div >
               <Form  onSubmit={this.handleSubmit} className="register-form">
                   <h2><center>Sign Up</center></h2>
                   
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </Form.Group>

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
                    <p><center>Already Member ? <Link>Sign In</Link></center></p>

                </Form>
                </div>

           
            
            </section>
            )
    }
}

export default connect()(UserRegister)