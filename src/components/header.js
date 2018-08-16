import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md bg-blue fixed-top">
    
        <a className="navbar-brand bold6" href="#" style={{color: 'white'}}>OluwaJuwon.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"style={{color: 'white'}}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{color: 'white'}}>About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" style={{color: 'white'}}>Portfolio</a>
            </li>
          </ul>

          </div>
    </nav>
)

export default Header
