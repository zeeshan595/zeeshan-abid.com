import * as React from "react";
import "./Style.scss";

export interface IIntroProps {
  Info?: string[]
}

export interface IIntroState {
}

class Intro extends React.Component<IIntroProps, IIntroState>
{
  render() {
    return (
      <div className="intro">
        <div className="content">
          <h1>
            Zeeshan Abid
          </h1>
          <div className="seperator"></div>
          <div className="seperator right"></div>
          <p className="info">
            {
              this.props.Info.map(i => (
                <React.Fragment key={i}>
                  {i}<br/>
                </React.Fragment>
              ))
            }
          </p>
          <a className="github" href="https://github.com/zeeshan595">View GitHub</a>
          <a className="linkedIn" href="https://www.linkedin.com/in/zeeshan595/">View Linked In</a>
        </div>
        <div className="moonContainer">
          <span>Portfolio</span>
          <div className="clouds cloud1"></div>
          <div className="clouds cloud2"></div>
          <div className="clouds cloud3"></div>
          <div className="clouds cloud4"></div>
          <div className="clouds cloud5"></div>
          <div className="moon"></div>
        </div>
      </div>
    );
  }
}

export default Intro;