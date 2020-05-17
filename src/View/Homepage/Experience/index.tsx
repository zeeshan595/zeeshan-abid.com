import * as React from "react";
import "./Style.scss";

export interface IExperienceProps {}

export interface IExperienceState {}

class Experience extends React.Component<IExperienceProps, IExperienceState> {
  render() {
    return (
      <div className="skills">
        <div className="content">
          <h1>SKILLS</h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <div className="skillInfoContainer">
            <div className="skillInfo">
              <div className="skillInfoHeading">Front End Development</div>
              <div className="info">Typescript</div>
              <div className="info">Javascript</div>
              <div className="info">Angular</div>
              <div className="info">React</div>
              <div className="info">MVC</div>
              <div className="info">JQuery</div>
              <div className="info">SASS</div>
            </div>
            <div className="skillInfo">
              <div className="skillInfoHeading">Back End Development</div>
              <div className="info">NginX</div>
              <div className="info">Node JS</div>
              <div className="info">Dot Net Core C#</div>
              <div className="info">ASP.NET</div>
              <div className="info">Entity Framework</div>
            </div>
            <div className="skillInfo">
              <div className="skillInfoHeading">Dev Ops</div>
              <div className="info">Azure Portal</div>
              <div className="info">Azure Dev Ops</div>
              <div className="info">CI Pipeline (YML)</div>
              <div className="info">Github Actions</div>
              <div className="info">Linux Scripting</div>
              <div className="info">Digital Ocean</div>
            </div>
            <div className="skillInfo">
              <div className="skillInfoHeading">Source Control</div>
              <div className="info">Bit Bucket</div>
              <div className="info">Git Hub</div>
              <div className="info">Git Kraken</div>
              <div className="info">Git Command Line</div>
              <div className="info">Source Tree</div>
            </div>
            <div className="skillInfo">
              <div className="skillInfoHeading">Game Development</div>
              <div className="info">C / C++</div>
              <div className="info">Multi Threading</div>
              <div className="info">GLSL</div>
              <div className="info">Vulkan</div>
              <div className="info">Unity 3D</div>
              <div className="info">SDL</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
