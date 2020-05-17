import * as React from "react";
import "./Style.scss";

export interface IIntroProps {
  Info?: string[]
}

export interface IIntroState {
  ScrollDownDisplay: string;
}

class Intro extends React.Component<IIntroProps, IIntroState>
{
  state = {
    ScrollDownDisplay: 'block'
  }

  componentDidMount() {
    window.addEventListener("scroll", (event) => {
      if (window.document.body.scrollTop > 20) {
        this.setState({
          ...this.state,
          ScrollDownDisplay: 'none'
        });
      } else {
        this.setState({
          ...this.state,
          ScrollDownDisplay: 'block'
        });
      }
    });
  }

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
        <div className="scrollDown" style={{
          display: this.state.ScrollDownDisplay
        }}>
          <span>SCROLLDOWN</span>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Intro;