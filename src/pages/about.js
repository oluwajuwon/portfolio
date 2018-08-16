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
                            <a href="https://www.linkedin.com/in/oluwajuwon-fagbohungbe-290a0b12b/" className="mr-2"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                            <a href="https://github.com/oluwajuwon" className="mr-2"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            <a href="mailto:jfagbohungbe@gmail.com" className="mr-2"><FontAwesomeIcon icon="envelope" /></a>
                        </div>
                        <div className="col-md-8">
                            <p className="textcolor1"><b>I am currently a Quality Assurance analyst at Rescue Technologies</b></p>
                            <p>As a Budding Developer, my main goal is to solve problems, create solutions and learn new methods of solving different kinds of problems, regardless of technology or programming language used. The main goal is to <b className="textcolor1">SOLVE PROBLEMS</b>. With a background in design, I love clean, minimal designs that fulfils its function while still aesthetically pleasing. </p>
                            <p>I have used a few programming languages and tools over the years and i've come to enjoy the new wave JavaScript is making and how it has planned to change the face of software development all over the globe.</p>
                            <p>I do also love scouring dribbble for real great designs and also creating my own mockups and prototypes on Adobe XD.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;