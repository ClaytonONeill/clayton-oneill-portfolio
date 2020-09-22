import React, { Component } from 'react';


class Project extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='project-contain-all'>
          <button onClick={() => {this.props.handleview('home')}} id='project-back-button'>Go Back</button>
          <div className='project-info-contain'>
            <div className='project-title-description'>
              <h1>{this.props.projectInfo.title}</h1>
              <p>{this.props.projectInfo.description}</p>
            </div>
            <div className='project-image-link'>
              <img src={this.props.projectInfo.image} className='shown-project-image'></img>
              <button id='project-link-button'><a href={this.props.projectInfo.link}>Take me to the site!</a></button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Project;
