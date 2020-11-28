import React from 'react';
import './../../App.css';

class Nevbar extends React.Component{
    constructor(props){
        super();
        this.state = {};
    }
    
    //css are located at the end the page
    render(){
       return(
          <nav className="nav" style={this.navStyle()}>
              <div className="logo" style={this.logoStyle()}>
                  <h4>Logo</h4>
              </div>
              <ul style={this.nevList()}>
                  <li>
                      <a href="#!">About</a>
                  </li>
                  <li>
                      <a href="#!">Experience</a>
                  </li>
                  <li>
                      <a href="#!">Work</a>
                  </li>
                  <li>
                      <a href="#!">Contact</a>
                  </li>
                  
              </ul>
          </nav>
       );
    }
    
    logoStyle(){
        return{
            color: "#000000",
        }
    }
    
    navStyle(){
        return{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "10vh",
            backgroundColor: "#5D4954",
            fontFamily: "sans-serif",
            
        }
    }
    
    nevList(){
        return{
            listStyle: "none",
            justifyContent: "space-around",
            display: "flex",
            textDecoration: "none",
        }
    }
    
    
    
    

}

export default Nevbar;
