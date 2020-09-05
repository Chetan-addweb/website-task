import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Discount from './components/Discount';
import Blog from './components/Blog';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
        <Navbar />
        
       <Route exact path="/" component={Home}/>
       <Route path="/Discount" component={Discount}/>
        <Route path="/Blog" component={Blog}/> 
      
         </div>
         <Footer />
         </Router>

      )
  }
}

export default App;
