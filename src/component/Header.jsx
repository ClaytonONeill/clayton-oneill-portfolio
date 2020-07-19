import React, { Component } from 'react';


class Header extends Component  {
  render () {
    return (
      <React.Fragment>
        <div className='header-contianer-main'>
          <div className='nav-links'>
            <h1 className='nav-list-item' onClick={() => this.props.handleView('home')}>Home</h1>
            <h1 className='nav-list-item' onClick={() => this.props.handleView('projects')}>Projects</h1>
            <h1 className='nav-list-item' onClick={() => this.props.handleView('about')}>About this site</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}



export default Header;
