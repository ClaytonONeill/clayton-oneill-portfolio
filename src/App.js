// IMPORTS

import React, {Component} from 'react';
import './App.css';
import Project from './component/Project.jsx';
import Header from './component/Header.jsx';
import About from './component/About.jsx';
import Home from './component/Home.jsx';

class App extends Component {
  state = {
    view: {
      page: 'home',
      pageTitle: 'home Page'
    },
    projects: [
      {
        id: 1,
        title: 'Drink Finder App',
        image: '../pictures/Drink-Finder.png',
        link: 'https://claytononeill.github.io/Drink-Finder-App/',
        description: 'The user can input full names or search based on the first letter of a cocktail and the application returns ingredients and recipes for each cocktail! I used HTML, CSS, Javascript and jQuery to create a responsive design thats easy to interface with. The API that I used can be found here: "https://www.thecocktaildb.com".'
      },
      {
        id: 2,
        title: 'The Beer Cellar',
        image: '../pictures/Beer-Cellar.png',
        link: 'https://morning-journey-64624.herokuapp.com/',
        description: 'An application for users to upload and describe new beers that they have tried. Users can log in and see what new brews their friends have been drinking. This application was my first full stack build using Node.js, Mongoose, Express, and EJS. It adheres to to the MVC structure and has full CRUD capacity. As well as user authentication with log-in & sign-up.'
      },
      {
        id: 3,
        title: 'Trippr',
        image: '../pictures/Trippr.png',
        link: 'https://tripprga.herokuapp.com',
        description: 'This was the first group build that I worked on. A blog site about travel locations, what they were like, and the ability to like others posts. Another Full Stack build that utilized the MEAN Stack, user authentication and password encryption using Bcrypt. Our group managed the project duties with Trello, and held stand meetings every morning and afternoon.'
      },
      {
        id: 4,
        title: 'NASA Picture of the Day',
        image: '../pictures/NASA-Project.png',
        link: 'https://claytononeill.github.io/NASA-Project/',
        description: 'This was a quick build application done as part of a code challange between a friend and I where we challanged ourselves to get an app up and running in two hours, utilizing a thrid party API, as well as React. Super fun, and one of my favorite builds.'
      }
    ]
  }

  handleview = (view, projectData) =>  {
    let pageTitle = '';
    let projectInfo = {
      id : null,
      image: '',
      link: '',
      description: ''
    }

    switch (view) {
        case 'home' :
          pageTitle = 'Home Page'
          break
        case 'showProject' :
            pageTitle = projectData.title
            projectInfo = {
              id: projectData.id,
              title: projectData.title,
              image: projectData.image,
              link: projectData.link,
              description: projectData.description
            }
            break
        case 'about' :
            pageTitle = 'About Me'
            break
        default:
           break
      }
      this.setState({
        view: {
          page: view,
          pageTitle: pageTitle
        },
        projectInfo: projectInfo
      })
  }



  render () {
    return (
      <React.Fragment>
        <Header
          handleview={this.handleview}
        />
          <div className='app-contain-all'>
          {
            this.state.view.page === 'about' ? <About />
            :
            this.state.view.page === 'showProject' ?
            <Project
              projectInfo={this.state.projectInfo}
              handleview={this.handleview}
            />
            :
            <Home
              projects={this.state.projects}
              handleview={this.handleview}
            />
          }
          </div>
      </React.Fragment>
    )
  }

}

export default App;
