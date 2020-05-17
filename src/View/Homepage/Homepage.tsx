import * as React from "react";
import Intro from "./Intro"
import Skills from "./Skills"
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";

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
        <Education />
        <div className="backgroundStars"></div>
        <div className="backgroundSky"></div>
        <div className="moonlight"></div>
        <div className="scrollDown">
          <span>SCROLLDOWN</span>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Homepage;