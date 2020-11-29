import React from 'react';
import './../../styles/Slider.css';
import './../../App.css';

class Slider extends React.Component{

    componentDidMount() {
        const welcome_notes = document.querySelectorAll('.intro-text span');
        welcome_notes.forEach((link,index) => {

            if(link.style.animation){
                link.style.animation = ``;
            }else {
                link.style.animation = `welcomeNoteFade 0.5s ease forwards ${index / 2 + 0.5}s`;
            }
        });

        setTimeout( () => {
            const sliderUp = document.querySelector('.intro');
            sliderUp.classList.add('slideUp');
        },3000);
    }

    render() {
        return (
            <section>
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
