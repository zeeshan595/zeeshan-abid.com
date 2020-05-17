import * as React from "react";
import "./Style.scss";
import IExperience from "../../../Model/Experience";

export interface IExperienceProps {
  Experience: IExperience[]
}

export interface IExperienceState {}

class Experience extends React.Component<IExperienceProps, IExperienceState> {
  render() {
    const experiences = this.props.Experience.map((experience, index) => (
      <div className="experience" key={index}>
        <div className="titleAndCompany">
          <span className="jobTitle">{experience.JobTitle}</span>
          @
          <span className="company">{experience.Company}</span>
        </div>
        <div className="location">
          {experience.Location}
          <span className="duration">
            {experience.StartAt} - {experience.EndAt}
          </span>
        </div>
        <p className="description">
          {experience.Description}
        </p>
      </div>
    ));
    return (
      <div className="experiences">
        <div className="content">
          <h1>Experience</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="experienceContainer">
            {experiences}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
