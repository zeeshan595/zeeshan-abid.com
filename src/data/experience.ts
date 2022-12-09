export type Event = {
  date: string;
  title: string;
  company: string;
  link?: string;
  info: string[];
};

export const events: Array<Event> = [
  {
    date: 'October 21 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Holo',
    link: 'https://holo.host/',
    info: [
      'Built a new well maintained api from scratch using nestjs',
      'Maintained & Built Back-end using nodejs, express and graphql',
      'Create a standard component libary that can be used by multiple projects',
      'Worked with clients to create acceptance criteria',
      'Helped integrate sentry in several projects and improving user experience',
      'Setup automated CD/CD with E2E testing using Cypress',
    ],
  },
  {
    date: 'May 21 - October 21',
    title: 'Senior Full-Stack Developer',
    company: 'Cox Automotive',
    link: 'https://www.coxautoinc.com/uk/',
    info: [
      'Lead a team of developers to complete objectives',
      'Created Multi staged CI / CD pipelines',
      'Lowered costs on Azure by using best practicies',
      'Monitored services using application insights and new relic',
      'Created Proof of Concepts for product owner',
    ],
  },
  {
    date: 'April 19 - May 21',
    title: 'Software Engineer',
    company: 'Waracle',
    link: 'https://waracle.com/',
    info: [
      'Used Azure Dev Ops to Setup a CI/CD Pipeline',
      'Used Angular to develop front-end for several projects',
      'Used Typescript NodeJS to maintain different projects',
      'Managed resources in Azure Portal through ARM',
      'Monitored services using application insights & Sentry',
      'Communicating with the client on project requirements',
      'Used C# .NET Core to develop back-end web API',
      'Performed database migrations and maintained different database (Azure SQL, MySQL)',
      'Wrote Unit tests using JEST and XUnit',
      'Integrated postman unit testing with CI/CD pipeline',
      'Setup Azure B2C Custom XML Policies for a project',
      'Working with python, running on RabitMQ',
    ],
  },
  {
    date: 'September 18 - April 19',
    title: 'Web Developer',
    company: 'Waracle (Scottish Power)',
    link: 'https://www.scottishpower.co.uk/',
    info: [
      'Used typescript with NodeJs to build in-house tools for better productivity',
      'Worked on the front-end for multiple projects using React, SASS, javascript, and HTML',
      'Managed MySQL back-end server',
    ],
  },
  {
    date: 'December 17 - September 18',
    title: 'Games Programmer',
    company: 'Hyper Luminal Games',
    link: 'https://hyperluminalgames.com/',
    info: [
      'Worked on a 3D application using Unity3D',
      'Build a front-end application using React',
      'Integrated Firebase to multiple applications',
    ],
  },
  {
    date: 'September 2013 - June 2017',
    title: 'Undergraduate Degree',
    company: 'Caledonian University',
    link: 'https://www.gcu.ac.uk/',
    info: [
      'Wrote a research paper on Artificial Intelligence',
      'Created a 3D Game Engine',
    ],
  },
];
