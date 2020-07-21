import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='home-main-contain'>
          <div className='welcome'>
            <h1>Welcome.</h1>
            <h3>This is a portfolio website created by Clayton O'Neill.</h3>
          </div>
          <div className='about-me'>
            <image src='#' id='about-me-image'></image>
            <h2 id='about-me-title'>About Me</h2>
            <p>sdfjdfs ajsdfl asjklasdjfjlkasjf asldjfj fsa sdfjdfs
            aksjdas lajdldj alksdj aljdlasdj aljsd
            ajsd lajd asjdi dj ei awjdiawjj waahsdkja dkasd ahds
            ashdjakdh iwhdahdkajsd
            ahsdj
            has djhasdwawdhw8
            aidh awd</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home;
