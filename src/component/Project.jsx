import React, { Component } from 'react';


class Project extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='project-contain-all'>
          <button onClick={() => {this.props.handleview('home')}} id='project-back-button'>Go Back</button>
          <div className='project-info-contain'>
            <h1>This is {this.props.projectInfo.title}</h1>
            <img src={this.props.projectInfo.image} className='shown-project-image'></img>
            <p>{this.props.projectInfo.description}</p>
            <a href={this.props.projectInfo.link}>Link to the site!</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Project;
