import React from 'react';
import {Carousel} from 'react-bootstrap';

class Home extends React.Component{
	render(){
		return(
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='assests/hero_bg_1.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 class="text-white font-weight-light">Love The Places</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assests/hero_bg_2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 class="text-white font-weight-light">Never Stop Exploring</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

   






			)
	}
}
export default Home;