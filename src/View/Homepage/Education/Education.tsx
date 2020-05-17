import * as React from "react";
import "./Style.scss";
import ISkill from "../../../Model/Skills";

export interface IEducationsProps {
  Skills?: ISkill[]
}

export interface IEducationsState {}

class Educations extends React.Component<IEducationsProps, IEducationsState> {
  render() {
    return (
      <div className="skills">
        <div className="content">
          <h1>EDUCATION</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="skillInfoContainer">
            <div className="education">
              <h3>Caledonian University<span> - Glasgow, UK</span></h3>
              <h5>BSc (Hons) Computer Games (Software Development) 2:1</h5>
              <div className="duration">september 2013 - July 2017</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Educations;
