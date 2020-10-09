import React, { Component } from 'react';


class About extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='about-me'>
            <div className='about-me-image'>
              <img src='././pictures/clayton-oneill-outside-image.jpg' id="about-me-image"></img>
            </div>
            <div className='about-me-info-contain'>
              <div className='about-p'>
                <p id='about-me-info'>I am a full stack software engineer with a passion for designing intuitive UI,
                 problem solving, and writing clean and well managed code.
                 For as long as I have been coding I have enjoyed all that I have learned so
                 far and am excited to keep expanding upon that knowledge.</p>

                 <p>I love animals, craft beer, the game Super Smash Bros Melee,
                 and of course software devlopment. I have a dog named <a href='././pictures/Lemon-Drop.jpeg' download>Lemon</a> who is a monster, and I hope you enjoy this picture of her!</p>

              </div>
              <div className='about-skills'>
                 <h3>Skills</h3>
                   <ul>
                     <li>Javascript</li>
                     <li>React</li>
                     <li>Angular</li>
                     <li>PHP</li>
                     <li>jQuery</li>
                     <li>NodeJS</li>
                     <li>MySQL</li>
                     <li>PostgreSQL</li>
                     <li>MongoDB</li>
                     <li>Express</li>
                     <li>Mongoose</li>
                     <li>Bootstrap</li>
                     <li>Git</li>
                     <li>Bash Shell</li>
                   </ul>
              </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
