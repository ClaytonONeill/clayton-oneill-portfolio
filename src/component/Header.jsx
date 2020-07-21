import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class Header extends Component  {
  render () {
    return (
      <React.Fragment>
        <div className='header-contianer-main'>
          <div className='icon-contain'>
            <SocialIcon url='https://www.linkedin.com/in/clayton-d-oneill' className='social-icon' />
            <SocialIcon url='https://www.github.com/ClaytonONeill' className='social-icon' />
          </div>
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
