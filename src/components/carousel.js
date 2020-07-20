import React from 'react'


function Carousel() {
    return (
        <div>
            <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

         
          <div className="carousel-item active" style={{background:" url('assets/img/slide/slide-1.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animated fadeInDown"><span>Meal</span> Basket</h2>
                <p className="animated fadeInUp">We only carry brands that meet our three-point standard for nutrition, convenience, and taste. Since our selection rotates as often as your tastes do, there’s always something new to try.</p>
                <div>
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
            </div>
          </div>

         
          <div className="carousel-item" style={{backgroundImage: "url('assets/img/slide/slide-2.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animated fadeInDown">Flexible Plans</h2>
                <p className="animated fadeInUp">Skip weeks, swap recipes, and cancel anytime - only order what and when you want. No commitments..</p>
                <div>
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
            </div>
          </div>

         
          <div className="carousel-item" style={{backgroundImage: "url('assets/img/slide/slide-3.jpg')"}}>
            <div className="carousel-background"><img src="assets/img/slide/slide-3.jpg" alt=" " /></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animated fadeInDown">We believe eating right should be easy for everyone.</h2>
                <p className="animated fadeInUp">That’s why we do the work of making food ready when you are with both nutrition and taste in mind..</p>
                <div>
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>

            
        </div>
    )
}

export default Carousel