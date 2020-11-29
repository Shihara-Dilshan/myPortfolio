import React, { Component } from 'react';

import Nevbar from './Components/Nevbar/Nevbar';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

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


    }

    render(){
       return(
           <React.Fragment style={{cursor: "none"}}>
             <div className="cursor"/>
             <Nevbar />
           </React.Fragment>
       );
    }
    
}
