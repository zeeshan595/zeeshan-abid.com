import * as React from "react";
import Intro from "./Intro/Intro"

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
        <div className="backgroundStars"></div>
        <div className="backgroundSky"></div>
        <div className="moonlight"></div>
      </div>
    );
  }
}

export default Homepage;