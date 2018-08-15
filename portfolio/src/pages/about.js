import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class about extends Component {
    render() {
        return (
            <div className="bg-grey" id="about">
                <div className="container">
                    <div className="row about">
                        <div className="col-md-4">
                            <h2 className="about--bold textcolor1">Hi, Let me introduce myself.</h2>
                            <a href="https://www.linkedin.com/in/oluwajuwon-fagbohungbe-290a0b12b/" class="mr-2"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            <a href="https://github.com/oluwajuwon" class="mr-2"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            <a href="mailto:jfagbohungbe@gmail.com" class="mr-2"><FontAwesomeIcon icon="envelope" /></a>
                        </div>
                        <div className="col-md-8">
                            <p className="textcolor1"><b>I am currently a Quality Assurance analyst at Rescue Technologies</b></p>
                            <p>As a Full Stack Developer with over 7 years of experience. My main goal is to solve problems and create solutions, regardless of technology or programming language used. The goal is to <b class="textcolor1">SOLVE PROBLEMS</b>. With a background in design, I love clean, minimal designs that fulfils its function while still aesthetically pleasing. </p>
                            <p>I have used multiple programming languages and tools over the years, but my favorite current technologies include Laravel, VueJS, React, React Native, Angular. </p>
                            <p>I do also love scouring dribbble for real great designs and also creating my own mockups and prototypes on Adobe XD.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;