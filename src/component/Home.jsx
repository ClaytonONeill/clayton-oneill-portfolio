import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='home-main-contain'>
          <div className='welcome'>
            <h1>Welcome.</h1>
            <h3>This is the portfolio for Clayton O'Neill</h3>
            <a href='../files/Clayton-Resume.pdf' download>Click here for a copy of my resume.</a>
          </div>
          <div className='home-pictures'>
            <h2>Projects:</h2>
            <img src='../pictures/Drink-Finder.png' className='project-picture'></img>
            <img src='../pictures/Beer-Cellar.png'className='project-picture'></img>
            <img src='../pictures/Trippr.png' className='project-picture'></img>
            <img src='../pictures/Dog-Bingo.png' className='project-picture'></img>
            <img src='../pictures/NASA-Project.png' className='project-picture'></img>
          </div>
          <div className='contact-information-main'>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home;
