import React from 'react';
import './../../styles/Slider.css';
import './../../App.css';
import image from './../../myphoto.png';

class Slider extends React.Component{

    render() {
        return (
            <section >
                <img src={image} alt="" style={{width:"100%"}}/>
                <h1 className="big-text" >Hi, my name is</h1>
                <div className="intro">
                    <div className="intro-text">
                        <h2 className="hide">
                            <span className="text">Hi, My name is,</span>
                        </h2>
                        <h4 className="hide">
                            <span className="text">Shihara Dilshan</span>
                        </h4>
                        <h6 className="hide">
                            <span className="text">Thank You for visiting.</span>
                        </h6>
                    </div>
                </div>
            </section>
        );
    }

}

export default Slider;
