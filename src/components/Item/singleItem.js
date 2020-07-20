import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startAddCart} from '../../actions/cartAction'
import review from '../review'


class SingleItem extends React.Component {
   constructor() {
       super()
       this.state = {
           quantity :0
       }
   }

   handleSubmit = () => {
       const formData = {
           items :this.props.item._id,
           quantity:this.state.quantity

           
       }
       const redirect = () => {
           return this.props.history.push('/review')
       }
       this.props.dispatch(startAddCart(formData,redirect))
   }

   
   handleClick = () => {
    this.setState({
        quantity:this.state.quantity + 1
    })
}

   handleIncrement = () => {
       this.setState({
           quantity:this.state.quantity + 1
       })
   }

   handleDecrement = () => {
       if(this.state.quantity > 0) {
           this.setState({
               quantity:this.state.quantity - 1
           })
       }
   }
    render() { 
        console.log(this.props)

        return (
            <div>
                {this.props.item?
              <div className="container ">
                  <div className="row">
                      <div className="col-10 mx-auto my-3">
                        <h2>{this.props.item.name}</h2>
                      </div>

                  </div>

                  <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={`../uploads/${this.props.item.image}`} />
                    </div>

                <div className="col-10 mx-auto col-md-6 my-3" >
                <p>{this.props.item.description}</p>
                
                <p>
                    <b>Ingreditents</b>:<br/>{this.props.item.ingredients}<br />
                    <b>Nutrients</b>:<br/>{this.props.item.nutrition_facts}
                </p>
                </div>
                <div className=" col-10 x-auto col-md-6" style={{paddingLeft:'12%'}}>
                    {
                    this.state.quantity == 0 ?
                    <button className="single-item-add" onClick={this.handleClick}> Add</button> :
                   
                    <div style={{paddingLeft:'50px'}}>
                    <button style={{color:'#fff',backgroundColor:'#E95E3E', outline:'none',border:'none',width:'30px'}} onClick={this.handleIncrement}>+</button>
                    { '  '}{this.state.quantity} {'  '}
                    <button  style={{color:'#fff',backgroundColor:'#E95E3E', outline:'none',border:'none',width:'30px'}} onClick={this.handleDecrement}>-</button>
                    </div>
                   

                }
                    </div>
                    <div className="single-item-btns">
                    <Link to="/menu"><button className="single-item-btn">Back</button>{' '}</Link>
                    <button className="single-item-btn" onClick={this.handleSubmit}>Continue</button>
                    
                    </div>

                </div>
              

              </div>
               :
               null }
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id =props.match.params.id
    console.log(state.item)

    return {
        item:state.item.find(item=>item._id == id)
    }
}

export default connect(mapStateToProps)(SingleItem)