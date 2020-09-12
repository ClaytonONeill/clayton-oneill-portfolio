import React, { Component } from 'react';


class About extends Component {
  render () {
    return (
      <React.Fragment>
      <div className='about-me'>
        <h2 id='about-me-title'>About Me:</h2>
          <div className='about-me-image'>

          </div>
          <div className='about-me-info-contain'>
            <p id='about-me-info'>I am a full stack software engineer with a passion for designing intuitive UI,
             problem soliving, and writing clean and well managed code.
             I have been coding for almost a year and have enjoyed all that I have learned so
             far and am excited to keep expanding upon that knowledge.</p>

             <p>I love animals, craft beer, the game Super Smash Bros Melee, and of course software devlopment. I am more than happy
             to talk at length about any of these topics to the point of annoyance and have done so on more tha  one occasion!
             </p>
          </div>
          <div className='about-skills'>
            <ul>
              <li>Javascript</li>
            </ul>
          </div>
      </div>
      </React.Fragment>
    )
  }
}

export default About;
