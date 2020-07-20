import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../components/navbar'
import Carousel from '../components/carousel'
import About from '../components/about'
import WhyUs from '../components/whyUs'
import Footer from '../components/footer'
class Home extends Component {
    render() {
	    return (
        <div>
            
            <Carousel />
            <About />
            <WhyUs />
            
        </div>
		
	     )
    }
}
export default Home
