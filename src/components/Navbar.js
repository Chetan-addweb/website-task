import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
	render(){
		return(
		<header className = "site-navbar py-1">

       <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
            <h1 className="mb-0">< Link to="/" className="text-black h2 mb-0">Travelers</Link></h1>
          </div>
          <div className="col-10 col-md-8 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">

              <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li className="active">
                  <Link to ="/">Home</Link>
                </li>
                                
                <li><a href="/Discount">About</a></li>
                <li><Link to ="/Blog">Blog</Link></li>
                
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
          </div>

          

        </div>
      </div>
      
    </header>

  
			)
	}
}

export default Navbar;