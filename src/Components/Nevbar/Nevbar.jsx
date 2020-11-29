import React from 'react';
import './../../App.css';
import './../../styles/Nevbar.css';

class Nevbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav_links: undefined,
            isClicked: false
        };
    }

    componentDidMount() {
        const nev_links = document.querySelectorAll('.nav_links li');
        this.setState({nav_links: nev_links});
    }

    navHandler = (e) => {
        const nav_links = document.querySelector('.nav_links');
        nav_links.classList.toggle('nav-active');

        this.state.nav_links.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        e.target.classList.toggle('toggle');
    }


    render(){
       return(
          <nav>
              <div className="logo" >
                  <h4>Shihara</h4>
              </div>
              <ul className="nav_links">
                  <li>
                      <a href="#!" className="hoverable">About</a>
                  </li>
                  <li>
                      <a href="#!" className="hoverable">Experience</a>
                  </li>
                  <li>
                      <a href="#!" className="hoverable">Work</a>
                  </li>
                  <li>
                      <a href="#!" className="hoverable">Contact</a>
                  </li>
              </ul>
              <div className="burger" onClick={this.navHandler}>
                  <div className="line1"/>
                  <div className="line2"/>
                  <div className="line3"/>
              </div>
          </nav>
       );
    }

}

export default Nevbar;
