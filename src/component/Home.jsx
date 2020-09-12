import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='home-main-contain'>
          <div className='welcome'>
            <h1>Welcome.</h1>
            <h3>This is the portfolio for Clayton O'Neill.</h3>
            <h4>To the right are some projecets I have worked on.
            Click on them to show more information.</h4>
            <h5>Thanks for visiting :)</h5>
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
