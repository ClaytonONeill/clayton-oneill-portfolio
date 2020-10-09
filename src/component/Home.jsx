import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='home-main-contain'>
          <div className='welcome'>
            <h1>Welcome.</h1>
            <h3>This is the portfolio for Clayton O'Neill.</h3>
            <h4>Check out some projects I've worked on!</h4>
            <h5>Thanks for visiting :)</h5>
            <a href='../../files/Clayton-Resume.pdf' download id='resume'>Download my resumé here!</a>
          </div>
          <div className='home-pictures'>
            <div className='home-picture-contain'>
              {this.props.projects.map((projectData) =>
                <img
                  key={projectData.id}
                  onClick={() => {this.props.handleview('showProject', projectData)}}
                  src={projectData.image}
                  className='home-picture'
                ></img>
              )}
            </div>
          </div>
          <div className='contact-information-main'>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home;
