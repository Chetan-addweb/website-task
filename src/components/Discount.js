import React from 'react';
import {Jumbotron,Button} from'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from'../assests/img_2.jpg';

import './Discount.css';

class About extends React.Component{
	render(){
		return(
	<React.Fragment>		
       <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
         extra attention to featured content or information.
        </p>
      <p>
       <Button variant="primary"><Link to= "/Discount">About</Link></Button>
      </p>
     </Jumbotron>
     <div className="container">
     <div className="container-fluid d-flex justify-content-center"> 
     <div className="row">
     <div className="col-md-4 col-lg-4">

     <div className="card text-center">
     <div className="overflow">
      <img src={img1} alt = "image1" className="card-img-top"/>
     </div>
      
     <div className="card-body text-dark">
     <h4 className="card-title">Adventure</h4>
     <p className="card-text text-secondary">
        Adventure places visited Blah blah.....
     </p> 
     <a href="#" className="btn btn-outline">Go Anywhere</a>
     </div>   
     
      
     
     <div className="overflow">
      <img src={img1} alt = "image1" className="card-img-top"/>
     </div>
     <div className="card-body text-dark">
     <h4 className="card-title">Adventure</h4>
     <p className="card-text text-secondary">
        Adventure places visited Blah blah.....
     </p>
     </div>

    
   <div className="overflow">
      <img src={img1} alt = "image1" className="card-img-top"/>
     </div>
     <div className="card-body text-dark">
     <h4 className="card-title">Adventure</h4>
     <p className="card-text text-secondary">
        Adventure places visited Blah blah.....
     </p>
     </div>

   
     </div>
</div>
</div>
</div>
</div>
     </React.Fragment>

        
    

              
			)
	}
}
export default About;