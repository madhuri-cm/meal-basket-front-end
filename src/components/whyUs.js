import React from 'react'
import {Link} from 'react-router-dom'



function WhyUs() {
    return (
        <div>
            <section id="why-us" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>It is Food Fast - <span>Not Fast Food</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">

          <div className="col-lg-3">
		  
            <div className="box">
			
              <span>01</span>
              <h4>Chill</h4>
              <p>Your meals arrive fresh in an insulated box. Just unpack and put them in the fridge.</p>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="box">
              <span>02</span>
              <h4>Heat</h4>
              <p>No time? No problem. Just heat up when hungry. Ready in 3 minutes.</p>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="box">
              <span>03</span>
              <h4> Eat</h4>
			  <p>Breakfast, Lunch, Dinner and Snacks in-between. We cater for your diet.</p>
            </div>
			
          </div>

		<div className="col-lg-3 mt-4 mt-lg-0">
			<div className="box">
				<span>04</span>
				<h4>Repeat</h4>
				<p>Every week, pre-made meals are delivered to your door, nationwide.</p>

			</div>
		</div>
        </div>
		
		<button className="transparent-btn"> How it works</button>
		
      </div>
    </section>

    <section id="about" className="about">
     
        <div className="row">
        <div className="col-lg-5 align-items-stretch img-plan" style={{backgroundImage: "url('assets/img/choose-plan.jpg')"}} >
        </div>
        <div className="col-lg-7">
        <div className="description">
        
        <h2>Feed Your Cravings with Deliciously Real Food.</h2>
       
        <p className="container">Ready made quality ingredients matching high-end organic superstores. Authentic cooking at its finest (and quickest). Your instant need to eat is served with a broad menu, blending everything from tender meats to earthy fruits and veggies topped with various herbs, spices and seasonings.</p>
        
        <Link to="/select-plan"><button className="solid-btn">Get Started</button></Link>
        
        </div>
        </div>
        </div>

   </section>

        </div>
    )
}

export  default WhyUs