import * as React from "react";
import "./Style.scss";
import ISkill from "../../../Model/Skills";

export interface ISkillsProps {
  Skills?: ISkill[]
}

export interface ISkillsState {}

class Skills extends React.Component<ISkillsProps, ISkillsState> {
  render() {
    const skills = this.props.Skills.map(skill => (
      <div className="skillInfo" key={skill.Name}>
        <div className="skillInfoHeading">{skill.Name}</div>
        {
          skill.Skills.map(info => (
            <div className="info" key={info}>{info}</div>
          ))
        }
      </div>
    ));
    return (
      <div className="skills">
        <div className="content">
          <h1>SKILLS</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="skillInfoContainer">
            {skills}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
