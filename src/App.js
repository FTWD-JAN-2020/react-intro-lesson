import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'
import ProjectDetails from './components/projectDetails'
import { FAQ , CONTACT } from './components/faq'
import projects from './projects.json'



export default class App extends Component {
  state = {
    userLoggedIn: true,
    projects
  }
  render() {
    return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/frequently-asked-questions">FAQ</Link></li>

        </ul>
      </nav>

      <Switch>
        <Route
          path="/home"
          render={props => <Home {...props} />}
        />
        <Route
          path="/about"
          render={props => <About {...props} />}
        />

        <Route 
          path="/frequently-asked-questions"
          render={props => <FAQ {...props} />}
        />

        <Route 
          path="/project-details/:banana" //This can be anything even ":banana"
          render={props => (
            <ProjectDetails 
              {...props} 
              projects = {this.state.projects}
              />
          )}
        />


        <Route 
          path="/projects" 
          render={props => (
          this.state.userLoggedIn ? (
            <Projects 
              projectProps = {this.state.projects}
              {...props} 
            />
          ) : (
            <Home {...props} />
          )
        )}/>
      </Switch>
    </div>
  )
}
}