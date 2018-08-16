import React, { Component } from 'react';
const projects = [
    {id:1, name:'Tharium Crypto Landing page', imgurl: 'crypto.jpg' },
    {id:1, name:'Food Ordering App', imgurl: 'food.png' },
    {id:1, name:'Music App', imgurl: 'music.png' },
    {id:1, name:'404 Error Page', imgurl: '404.png' },
    {id:1, name:'First UI idea for Unsigned Afrika', imgurl: 'unsigned.png' },
];

const projectItems = projects.map((project) =>
    <div className="portfolio__small col-md-3" key={project.id}>
        <img src={'../images/'+project.imgurl} className="img-fluid" alt={project.name} />
        <p className="text-center textcolor1"><b>{project.name}</b></p>
    </div>
);

class uiportfolio extends Component {
    render() {
        return (
            <div>
                <div className='row' style={{padding: '1.6rem'}}>
                <p>Below are some UI mockups i created that i plan to bring to life very soon</p>
                    </div>
                <div className="row">
                
                   {projectItems}
                </div>
                <div className='row'>
                    <h2 style={{textAlign: 'center', width: '100%'}}>Watch this space...</h2>
                </div>
            </div>
        );
    }
}

export default uiportfolio;