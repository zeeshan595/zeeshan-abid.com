import './Experience.css';

function Experience() {
  return (
    <div>
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-container">
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <div className="timeline-date">April 2019 - May 2021</div>
              <div className="timeline-title">
                <b>Waracle</b>
                <span> - Software Engineer</span>
              </div>
              <ul>
                <li>Used Azure Dev Ops to Setup a CI/CD Pipeline</li>
                <li>Used Azure Dev Ops to Setup a CI/CD Pipeline</li>
                <li>Used Angular to develop front-end for several projects</li>
                <li>Used Typescript NodeJS to maintain different projects</li>
                <li>Managed resources in Azure Portal through ARM</li>
                <li>Monitored services using application insights & Sentry</li>
                <li>Communicating with the client on project requirements</li>
                <li>Used C# .NET Core to develop back-end web API</li>
                <li>
                  Performed database migrations and maintained different
                  database (Azure SQL, MySQL)
                </li>
                <li>Wrote Unit tests using JEST and XUnit</li>
                <li>Integrated postman unit testing with CI/CD pipeline</li>
                <li>Setup Azure B2C Custom XML Policies for a project</li>
                <li>Working with python, running on RabitMQ</li>
              </ul>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <div className="timeline-date">September 2018 - April 2019</div>
              <div className="timeline-title">
                <b>Waracle</b>
                <span> - Web Developer</span>
              </div>
              <ul>
                <li>
                  Used typescript with NodeJs to build in-house tools for better
                  productivity
                </li>
                <li>
                  Worked on the front-end for multiple projects using React,
                  SASS,
                </li>
                <li>javascript, and HTML Managed MySQL back-end server</li>
              </ul>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <div className="timeline-date">
                December 2017 - September 2018
              </div>
              <div className="timeline-title">
                <b>Hyper Luminal Games</b>
                <span> - Games Programmer</span>
              </div>
              <ul>
                <li>Worked on a 3D application using Unity3D</li>
                <li>Build a front-end application using React</li>
                <li>Integrated Firebase to multiple applications</li>
              </ul>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <div className="timeline-date">September 2013 - June 2017</div>
              <div className="timeline-title">
                <b>Caledonian University</b>
                <span> - Undergraduate Degree</span>
              </div>
              <p>Computer Games (Software Development), 2.1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
