import React, { Component } from 'react';


class Project extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='title-contain'>
          <h1 className='project-title'>{this.props.projects.title}</h1>
        </div>
        <div className='project-data-main'>
          <div className='title-image'>
            <img src={this.props.projects.image} className='project-image'></img>
          </div>
          <div className='information-contain'>
            <div className='project-description'>
              <p>{this.props.projects.description}</p>
            </div>
            <div className='project-link'>
              <a href={this.props.projects.link}><button type="button" className="btn btn-outline-secondary">Take me to the site!</button></a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Project;
