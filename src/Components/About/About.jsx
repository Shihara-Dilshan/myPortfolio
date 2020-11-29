import React from 'react';
import './../../styles/About.css';
import me from './../../me.jpg';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            icons: [],
        };
    }

    componentDidMount() {
        const skills_list = ['JavaScript/TypeScript / HTML5 / CSS3', 'NodeJS / ExpressJS / Deno', 'Java / SpringBoot', 'Python / Flask / Django', 'React / Angular/ Vue', 'Android Studio with Java', 'React Native'];
        const icon_list = ['https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
                           'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
                           'https://sdtimes.com/wp-content/uploads/2019/03/jW4dnFtA_400x400.jpg',
                           'https://engineering.fb.com/wp-content/uploads/2016/05/2000px-Python-logo-notext.svg_.png',
                           'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
                           'https://raw.githubusercontent.com/Shihara-Dilshan/img/master/pasted%20image%200.png',
                           'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'];
        this.setState({skills: skills_list, icons: icon_list});


    }

    render() {
        return (
            <div className="About_info">
                <div className="details_info">
                    <h3 className="tech">1. About Me </h3>
                    <hr/>
                    <br/>
                    <p className="tech">Hello! I'm Shihara Dilshan, a student, self learner, web/mobile app developer. Also I build
                        things for computers as well.<br/><br/>
                        I am currently studying Information technology at SLIIT. I've been developing web/mobile and
                        desktop applications mostly using JavaScript.<br/><br/>
                        Here are a few technologies I've been working with recently:</p>
                    <br/>
                    <ul className="tech">
                        {this.state.skills.map( (skill,index) => <li key={skill} className="single_list">
                            <img id="skill_icon" align="left" alt="ddd" width="22px" height="22px" src={this.state.icons[index]} />
                            <span className="skills"> {skill}</span></li>
                        )}
                    </ul>

                </div>

                <div className="image_info">
                    <img src={me} alt="sdsdsdsdsd" id="profile_pic"/>
                </div>
            </div>
        );
    }
}