import * as React from "react";
import "./Style.scss";

export interface ISkillsProps {

}

export interface ISkillsState {
}

class Skills extends React.Component<ISkillsProps, ISkillsState>
{
  render() {
    return (
      <div className="Skills">
        <h4 id="skills">
          # Skills
        </h4>
        <div className="SkillContainer">
          <h3>Web Development <span>(Front End)</span></h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>RxJs</li>
            <li>Thunk</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>SASS/CSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="SkillContainer">
          <h3>Web Development <span>(Back End)</span></h3>
          <ul>
            <li>C# .NET</li>
            <li>ASP</li>
            <li>Linux</li>
            <li>Azure</li>
            <li>NginX</li>
            <li>Node JS</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="SkillContainer">
          <h3>Game Development</h3>
          <ul>
            <li>C/C++</li>
            <li>Vulkan</li>
            <li>Unit 3D</li>
            <li>Glsl</li>
            <li>Open GL</li>
            <li></li>
          </ul>
        </div>
        <div className="SkillContainer">
          <h3>Machine Learning</h3>
          <ul>
            <li>Neural Network</li>
            <li>Deep Learning</li>
            <li>Reinforcement Learning</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;