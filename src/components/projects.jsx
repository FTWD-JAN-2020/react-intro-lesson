import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Projects extends Component {


  showProjectLinks = () => {
    let projects = this.props.projectProps.map(eachProjectProp => {
      return ( 
        <li>
          <Link to={`/project-details/${eachProjectProp.id}`}>{eachProjectProp.name}</Link>
          {/* <a href="/project-details/3c"                  >The Plan              </a> */}
          </li>

      )
    })
    return projects
  }

  render() {
    return (
      <div>
        <h1>I'm in projects!</h1>
        {this.showProjectLinks()}


      </div>
    );
  }
}

export default Projects;