import * as React from "react";
import Intro from "./Intro"
import Skills from "./Skills"
import Experience from "./Experience";
import Projects from "./Projects";

export interface IHomepageProps {

}

export interface IHomepageState {

}

class Homepage extends React.Component<IHomepageProps, IHomepageState>
{
  render() {
    return (
      <div>
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <div className="backgroundStars"></div>
        <div className="backgroundSky"></div>
        <div className="moonlight"></div>
      </div>
    );
  }
}

export default Homepage;