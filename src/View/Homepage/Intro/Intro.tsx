import * as React from "react";
import "./Style.scss";

export interface IIntroProps {

}

export interface IIntroState {

}

class Intro extends React.Component<IIntroProps, IIntroState>
{
  render() {
    return (
      <React.Fragment>
        <div className="moonContainer">
          <div className="clouds cloud1"></div>
          <div className="clouds cloud2"></div>
          <div className="clouds cloud3"></div>
          <div className="clouds cloud4"></div>
          <div className="clouds cloud5"></div>
          <div className="moon"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;