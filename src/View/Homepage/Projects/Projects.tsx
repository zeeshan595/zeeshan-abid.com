import * as React from "react";
import "./Style.scss";
import IProjects from "../../../Model/Projects";

export interface IprojectsProps {
  Projects?: IProjects[];
}

export interface IProjectsState {}

class Projects extends React.Component<IprojectsProps, IProjectsState> {
  render() {
    const projects = this.props.Projects.map((project, index) => (
      <div className="project" key={index}>
        <div className="projectContent">
          <h3>{project.Name}</h3>
          <p>{project.Description}</p>
          <a href={project.GitHub} target="_blank">
            View on GitHub
          </a>
        </div>
        <img src={project.Image} alt={project.ImageAlt} />
      </div>
    ));
    return (
      <div className="projects">
        <div className="content">
          <h1>Projects</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="projectContainer">{projects}</div>
        </div>
      </div>
    );
  }
}

export default Projects;
