import React from 'react';
import {Jumbotron} from 'react-bootstrap'; 
import img1 from '../assests/img_2.jpg';
import './Blog.css';

class Blog extends React.Component{
	render(){
		return(
			<React.Fragment>
            <div class="container">
            <div class="col-md-12">
              <h3>OUR BLOG</h3>
            <Jumbotron>
           <img src ={img1} alt= "image1" className="card-img" /> 
           <h1>Hello, world!</h1>
           <p>
          This is a simple hero unit, 
          extra attention to featured content or information.
          </p>
        
        </Jumbotron>
            </div>
            </div>

			</React.Fragment>

			)
	}
}
export default Blog;