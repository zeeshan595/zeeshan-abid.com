import { useState } from 'react';
import './Resume.css';

export type ResumeState = {
  portfolioOverlayOpacity: number;
};

function Resume() {
  const [state, updateState] = useState({
    portfolioOverlayOpacity: 0,
  } as ResumeState);

  return (
    <a href="/resume.pdf">
      <div
        className="portfolio-image"
        onMouseEnter={() =>
          updateState({
            ...state,
            portfolioOverlayOpacity: 1,
          })
        }
        onMouseLeave={() =>
          updateState({
            ...state,
            portfolioOverlayOpacity: 0,
          })
        }
      >
        <div
          className="overlay"
          style={{ opacity: state.portfolioOverlayOpacity }}
        >
          Download Resume
        </div>
        <div className="portfolio-image-header"></div>
        <div className="portfolio-image-text-long"></div>
        <div className="portfolio-image-text-mid"></div>
        <div className="portfolio-image-text-long"></div>
        <div className="portfolio-image-text-short"></div>
      </div>
    </a>
  );
}
export default Resume;
