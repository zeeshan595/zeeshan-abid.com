import * as React from "react";

import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

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
        <Projects />
      </div>
    );
  }
}

export default Homepage;