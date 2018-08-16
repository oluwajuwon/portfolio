import React, { Component } from 'react';

class footer extends Component {
    
    currYear = () => {
        var year = new Date().getFullYear();
        return year;
    }

    render() {
        return (
            <div className=" container mt-4 text-center p-4">
                <hr/>
                <p>Built using <a href="https://www.gatsbyjs.org/">Gatsby</a></p>
                <p>&copy; {this.currYear()} • All Rights Reserved</p>
            </div>
        );
    }
}

export default footer;