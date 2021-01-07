import { Action } from "redux";
import IExperience from "../../Model/Experience";

export interface IExperienceState {
  Experience: IExperience[]
}

export const defaultState: IExperienceState = {
  Experience: [
    {
      Company: "Waracle",
      Location: "Glasgow, UK",
      JobTitle: "Full Stack Developer",
      StartAt: "April 2019",
      EndAt: "Present",
      Description: "Throughout this position, I used tools/services such as Azure Portal, Azure DevOps, SQL, Typescript, Git, Jira, BitBucket. I interacted with the client directly to make several projects a success."
    },
    {
      Company: "Waracle (Scottish Power)",
      Location: "Glasgow, UK",
      JobTitle: "Web Developer",
      StartAt: "September 2018",
      EndAt: "April 2019",
      Description: "Worked with Scottish Power as Web developer through Waracle. My roles involve working on the front end for the main ScottishPower website. Additionally, I built some utility tools for Scottish Power, to help them be more productive."
    },
    {
      Company: "Hyper Luminal Games",
      Location: "Dundee, UK",
      JobTitle: "Games Programmer",
      StartAt: "January 2018",
      EndAt: "September 2018",
      Description: "Had a wonderful time working with a team of talented developers in bringing to life multiple projects. Including being the lead developer in a unity 3d  mobile app. I was also responsible for programming the front end and back end of a children’s learning application with an online console for teachers."
    }
  ]
};

export default (state: IExperienceState = defaultState, action: Action): IExperienceState => {
  return state;
};
