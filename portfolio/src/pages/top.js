import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class top extends Component {
    render() {
        return (
            <div className="container top__hero">
                <div className="h-100">
                    <div className="row">
                        <div className="col-md-6 top__hero__info">
                            <h1 className="top__hero__text top__hero--bold pt-4 mt-0">Hi, I'm Oluwajuwon. <br/> A Growing Developer</h1>
                            <p>I have a knack for solving problems and making things look good. I believe in making the world a better place, one solution at a time</p>
                            <p className="top__hero__projectlink"><a href="#portfolio">VIEW MY PORTFOLIO <FontAwesomeIcon icon="arrow-right" /></a> <a className="btn btn-sm btn-primary ml-3 text-white pr-4 pl-4" href="https://drive.google.com/open?id=0B9_UrzYeGlanbzdiT1ZJU3ZUZXBGX3luam5Pd3NQSkRaaXYw"><FontAwesomeIcon icon="download" /> DOWNLOAD CV</a></p>
                        </div>
                        <div className="col-md-6 p-4">
                            <img src="../images/work.svg" className="img-fluid" alt="work icon"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default top;