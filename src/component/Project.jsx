import React, { Component } from 'react';


class Project extends Component {
  render () {
    return (
      <React.Fragment>
        <button onClick={() => {this.props.handleview('home')}}>Go Back</button>
        <h1>This is {this.props.projectInfo.title}</h1>
      </React.Fragment>
    )
  }
}


export default Project;
