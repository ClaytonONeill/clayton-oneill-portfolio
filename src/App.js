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
        title: 'Drink Finder App',
        image: '../pictures/Drink-Finder.png',
        link: 'https://claytononeill.github.io/Drink-Finder-App/',
        description: 'The user can input full names or search based on the first letter of a cocktail and the application returns ingredients and recipes for each cocktail! I used HTML, CSS, Javascript and jQuery to create a responsive design thats easy to interface with. I used this API "https://www.thecocktaildb.com".'
      },
      {
        title: 'The Beer Cellar',
        image: '../pictures/Beer-Cellar.png',
        link: 'https://morning-journey-64624.herokuapp.com/',
        description: 'An application for users to upload and describe new beers that they have tried. Users can log in and see what new brews their friends have been drinking. This application was my first full stack build using Node.js, Mongoose, Express, and EJS. It adheres to to the MVC structure and has full CRUD capacity. As well as user authentication with log-in & sign-up.'
      },
      {
        title: 'Trippr',
        image: '../pictures/Trippr.png',
        link: 'https://tripprga.herokuapp.com',
        description: 'This was the first group build that I worked on. A blog site about travel locations, what they were like, and the ability to like others posts. Another Full Stack build that utilized the MEAN Stack, user authentication and password encryption using Bcrypt. Our group managed the project duties with Trello, and held stand meetings every morning and afternoon.'
      },
      {
        title: 'The Quiz App',
        image: '../pictures/The-Quiz-App.png',
        link: 'https://peaceful-dawn-12551.herokuapp.com/',
        description: 'This was another group built application that allows users to create and take quizzes that other users have designed. Our group put a lot of time into the quiz design and making it a fluent and easy to understand interface. This was built with a PHP backend linked to a Create-React-App front end.'
      },
      {
        title: 'Dog Bingo',
        image: '../pictures/Dog-Bingo.png',
        link: 'https://stark-hollows-15427.herokuapp.com/',
        description: 'This was an application idea I\'ve had for a while, and this was a super fun one to build. I utilized Create-React-App, PHP to store uploaded user data, as well as a Third Party API to render the game board with dog names. Implementing game logic to this project was a blast, as well as doing the full design.'
      }
    ]
  }

  handleView = (view) =>  {
    let pageTitle = '';

    switch (view) {
        case 'home' :
          pageTitle = 'Home Page'
          break
        case 'projects' :
            pageTitle = 'Projects'
            break
        case 'about' :
            pageTitle = 'About this site'
           break
        default:
           break
      }
      this.setState({
        view: {
          page: view,
          pageTitle: pageTitle
        }
      })
  }


  render () {
    return (
      <React.Fragment>
        <Header
          handleView={this.handleView}
        />
        {
        this.state.view.page === 'projects' ?
        this.state.projects.map((projects) =>  (
          <Project
          key={projects.id}
          projects={projects}
          />
        )) : this.state.view.page === 'about' ? <About />
        : <Home />
      }
      </React.Fragment>
    )
  }

}

export default App;
