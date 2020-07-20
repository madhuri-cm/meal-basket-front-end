import React from 'react'
import {Container,Tabs,Tab} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card,Button,Modal} from 'react-bootstrap'
import SignInPopUp from './modal'




class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false,
            items:''
        }
        
    }
    
    handleSignUpPopup = (bool,item) => {
        this.setState({
            show:bool,
            items:item
        })
    }
    
    
    render() {
        
        return (
            <div className="category"> 
            <section className="menu-section">
                  
                    <Container>
                          <h2 style={{marginTop:"5px"}}>Choose from wide vaeirty of a la carte menu</h2>
                          <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="tab"  >
                                {this.props.category.map((category,i)=>{
                                    return (
                                      <Tab  eventKey={i} title={category.name}   >
                                          <div className="row menu-plan">
                                                {this.props.item.filter(item=>item.category == category._id).map((item,i)=>{
                                                    return(
                                                      <div className="menu">
                                                         <Card className="menu-card">
                                                          <Card.Img variant="top" src={`../uploads/${item.image}`}  />
                                                          <Card.Body>
                                                            <Card.Text><b>{item.name}</b></Card.Text>
                                                                <Card.Text>{item.price}/Meal</Card.Text>
                                                          </Card.Body>
                                                          </Card>
                                                        <button onClick={() => this.handleSignUpPopup(true,item)}> show modal</button>
                                                            <SignInPopUp
                                                                items = {this.state.items}
                                                                handleSignUpPopup={this.handleSignUpPopup}
                                                                showModal={this.state.show}/>
                                                          
                                                          
                                                          <div>
       
                                                    </div>
                                              </div>
                     
                                                            )
                                                          })
                                                        }
                                          </div>
                                        </Tab>

                                        )
                                      })
                                      }
                                    
                            </Tabs>
                        </Container>
                    <Link to="/menu/new">Add Items</Link>
                    </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.category,
        item: state.item
    }
}

export default connect(mapStateToProps)(Menu)