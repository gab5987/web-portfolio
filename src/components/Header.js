import React, { Component } from "react";
// import Typical from "react-typical";
import { TypeAnimation } from 'react-type-animation';

class Header extends Component {
  render() {
    return (
      <header id="home" style={{ height: window.innerHeight - 500, display: 'block' }}>
        <div className="row aligner" style={{height: '50%'}}>
          <div className="col-md-12">
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <TypeAnimation 
                  sequence={["Gabriel Novalski"]}
                  style={{ fontSize: '1em' }}
                  wrapper="h2"
                />
              </h1>
              <h1>
                <TypeAnimation
                  sequence={[ "Back-end Developer", 1000, "Software engineer student", 1000, "Electronics Technician", 1000 ]}
                  style={{ fontSize: '0.7em' }}
                  wrapper="h2"
                  repeat={Infinity}
                />
              </h1>
          </div>
        </div> 
      </header>
    );
  }
}

export default Header;
