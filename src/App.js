import React, { Component } from 'react';
import './App.css';

import Nevbar from './Components/Nevbar/Nevbar';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             componentList : [<About />]
        };
    }

    componentDidMount() {
        const mouse = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            let positionX =e.pageX;
            let positionY =e.pageY;

            mouse.style.top = `${positionY}px`;
            mouse.style.left = `${positionX}px`;
        });

        const allHoverabletags = document.querySelectorAll('.hoverable');
        allHoverabletags.forEach( tag => {
            tag.addEventListener('mouseover', () => {
                mouse.classList.add('link-grow');
            })
        });

        allHoverabletags.forEach( tag => {
            tag.addEventListener('mouseleave', () => {
                mouse.classList.remove('link-grow');
                tag.classList.remove('onTop');
            })
        })

        document.addEventListener( 'scroll' , () => {
            if(11==1){
                let currentCom = [...this.state.componentList, <About />];
                this.setState({componentList: currentCom});
            }
        });


    }

    render(){
       return(
           <React.Fragment style={{cursor: "none"}}>
             <div className="cursor test"/>
             <Nevbar />
             <Slider />
             {this.state.componentList.map( comp => comp)}
           </React.Fragment>
       );
    }
    
}
