import React, { Component } from 'react';

class mainportfolio extends Component {
    render() {
        return (
            <div>
                <div className="portfolio__big row">
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FRONT END DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">Dexstitches</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Magento Framework</li>
                        </ul>
                        <p>The platform was already existing with an older version of the magento framework. I redesigned the frontend with a newer version of magento. The redesign included the homepage, branding page and several other
                            pages on the platform.
                        </p> 
                        <p>Still a work in progress but definitely on the right path.</p>
                        <a href="http://www.dexstitches.com" target="_blank"><b>VISIT WEBSITE</b></a>
                    </div>
                    <div className="col-md-8">
                        <img src="../images/dex.png" className="img-fluid" alt="Dexstitches" />
                    </div>
                </div>
                <div className="portfolio__big row">
                    <div className="col-md-8">
                        <img src="../images/unsigned.jpg" className="img-fluid" alt="unsignedafrika" />
                    </div>
                    <div className="col-md-4">
                        <p className="m-0 p-0 textcolor1"><b>FRONT END DEVELOPMENT</b></p>
                        <h1 className="mb-0 pb-0 bold6">UnsignedAfrika</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Laravel</li>
                        </ul>
                        <p>Client requested a SPA. Something similar to Spotify, with the ability to stream music and be able to move seamlessly from one page to another without any interruption in the song.
                            I collaborated with a fellow developer to bring the client's idea to life. I created the UI mockups and explained how the User experience would be.
                            I also created the landing page to give users an exciting feel when they visit the platform.</p>
                        <a href="http://unsignedafrika.com" target="_blank"><b>VISIT WEBSITE</b></a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default mainportfolio;