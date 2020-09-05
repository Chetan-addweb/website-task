import React from 'react';
import './Footer.css';

class Footer extends React.Component{
	render(){
		return(
         <footer class="site-footer">
      <div className="container">
        <div classname="row">
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Travelers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Destination</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Discounts</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="mb-5">
              <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
           </div>
         </div>
          
        </div>
        <p>
          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | 
            
        </p>
    </div>
          
          
    </footer>
 


			)
	}

} 
export default Footer;