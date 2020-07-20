import React from 'react'
import { Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class SelectType extends React.Component {
    render() {
        return (
            <section className="select-type-section">
            <div className="select-type">
               
                <h2>Meals packed with flavor.</h2>
                <div className="select-type row">
                    <div className="select-type-meal">
                <Card style={{ width: '30rem' }} className="select-type-card">
                    <Card.Img variant="top" src="../assets/img/meal-plan.jpg" />
                    <Card.Body>
                        <Card.Title className="select-type-card-title">MEAL PLAN</Card.Title>
                        <Card.Text className="select-type-card-text"> Weekly Meals</Card.Text>
                        <Card.Text className="select-type-card-text">Cancel anytime</Card.Text>
                        <Link to="/meal-plans"><button  className="select-type-card-btn">SELECT</button></Link>
                    </Card.Body>
                </Card>
                </div>
                <div className="select-type-meal">
                <Card style={{ width: '30rem' }} className="select-type-card">
                    <Card.Img variant="top" src="../assets/img/a-la-carte.jpg" />
                    <Card.Body>
                        <Card.Title className="select-type-card-title">A LA CARTE</Card.Title>
                        <Card.Text className="select-type-card-text">One-time order </Card.Text>
                        <Card.Text className="select-type-card-text">Limited Availabilty</Card.Text>
                        <Link to="/menu"><button className="select-type-card-btn" >SELECT</button></Link>
                    </Card.Body>
                </Card>
                </div>
                </div>
               
            </div>
            </section>
        )
    }
}

export default SelectType