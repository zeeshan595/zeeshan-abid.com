import * as React from "react";
import "./Style.scss";

export interface IIntroProps {

}

export interface IIntroState {
  navigationClass: string;
}

class Intro extends React.Component<IIntroProps, IIntroState>
{
  state: IIntroState = {
    navigationClass: "NavigationCenter"
  };

  componentWillMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        this.setState({
          navigationClass: "Navigation"
        });
      } else {
        this.setState({
          navigationClass: "NavigationCenter"
        });
      }
    });
  }

  render() {
    return (
      <div className="Intro">
        <h4>
          Avid Programmer, Web Developer, Technology Enthusiast
        </h4>
        <ul className={this.state.navigationClass}>
          <li><a href="#skills">Skills</a></li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Intro;