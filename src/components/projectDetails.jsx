import React, { Component } from 'react';

class projectDetails extends Component {

    // componentDidMount(){
    //     console.log('component did mount', this.props.match.params.banana)
    // }

    showProject = () => {
        let project = this.props.projects.find(eachProject => {
            return eachProject.id === this.props.match.params.banana
        }) 
        return <li>{project.name} <p>{project.technologies}</p> <p>{project.description}</p></li>
    }

    render() {
        console.log(this)
        return (
            <div>
                {this.showProject()}
            </div>
        );
    }
}

export default projectDetails;