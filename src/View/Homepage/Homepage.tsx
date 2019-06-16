import * as React from "react";
import Intro from "./Intro/Intro"
import Skills from "./Skills/Skills"

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
        <div className="backgroundStars"></div>
        <div className="backgroundSky"></div>
        <div className="moonlight"></div>
      </div>
    );
  }
}

export default Homepage;