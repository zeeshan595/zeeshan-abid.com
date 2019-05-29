import * as React from "react";
import "./Style.scss";

export interface IProjectsProps {

}

export interface IProjectsState {
}

class Projects extends React.Component<IProjectsProps, IProjectsState>
{
  render() {
    return (
      <div className="Projects">
        <h4 id="projects">
          # Projects
        </h4>
        <div className="ProjectsContainer">
          <div className="Project">
            <span className="source">
              <a>View Source</a>
            </span>
            <img src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <h5>Bulletproof Email Creator</h5>
          </div>
          <div className="Project">
            <span className="source">
              <a>View Source</a>
            </span>
            <img src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <h5>Bulletproof Email Creator</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;