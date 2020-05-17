import * as React from "react";
import "./Style.scss";
import IExperience from "../../../Model/Experience";

export interface IExperienceProps {
  Experience: IExperience[]
}

export interface IExperienceState {}

class Experience extends React.Component<IExperienceProps, IExperienceState> {
  render() {
    return (
      <div className="experience">
        <div className="content">
          <h1>Experience</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="experienceContainer">
            <div className="experience">
              <div className="titleAndCompany">
                <span className="jobTitle">Full Stack Developer</span>
                @
                <span className="company">Waracle</span>
              </div>
              <div className="location">
                Glasgow, UK
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
