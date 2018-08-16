import React, { Component } from 'react';
import Mainportfolio from './mainportfolio'
import UiPortfolio from './uiportfolio'

class portfolio extends Component {

    render() {
        return (
            <div className="container" id="portfolio">
                <div className="portfolio">
                    <Mainportfolio></Mainportfolio>
                    <UiPortfolio></UiPortfolio>
                </div>
      
            </div>
        );
    }
    
}

export default portfolio;