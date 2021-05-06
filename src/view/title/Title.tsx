import React from 'react';
import linkedInPng from './assets/linkedin.png';
import githubPng from './assets/github.png';
import resumePng from './assets/resume.png';
import './Title.css';

function Title() {
  return (
    <React.Fragment>
      <h2>Portfolio</h2>
      <p>
        Hi, I am Zeeshan Abid <br />I design, build and deploy web applications.
      </p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/zeeshan595/">
          <img src={linkedInPng} alt="linked-in" />
        </a>
        <a href="https://github.com/zeeshan595">
          <img src={githubPng} alt="github" />
        </a>
        <a className="resume" href="/resume.pdf">
          <img src={resumePng} alt="resume" />
        </a>
      </div>
    </React.Fragment>
  );
}
export default Title;
