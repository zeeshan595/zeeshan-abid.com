import { Action } from "redux";
import IProjects from "../../Model/Projects";

export interface IProjectsState {
  Projects: IProjects[]
}

export const defaultState: IProjectsState = {
  Projects: [
    {
      Name: "Portfolio Website",
      Description: "This website was created in react to be fully responsive on multiple screen sizes and leverage MVC framework",
      GitHub: "https://github.com/zeeshan595/zeeshan-abid.com",
      Image: "assets/images/react.png",
      ImageAlt: "react"
    },
    {
      Name: "Tortuga (Game Engine)",
      Description: "In my free time I am currently working on a modern game engine using vulkan. It is built to support multi threaded rendering, PBR shaders, and ECS architecture.",
      GitHub: "https://github.com/tortuga-foundation/tortuga",
      Image: "https://raw.githubusercontent.com/tortuga-foundation/tortuga/master/Assets/Images/Render/Bricks.png",
      ImageAlt: "tortuga"
    },
    {
      Name: "NVK (Node JS Vulkan)",
      Description: "I contributed to the open source node js vulkan binding project. My contributions added typescript support to the project.",
      GitHub: "https://github.com/maierfelix/nvk",
      Image: "assets/images/nvk.png",
      ImageAlt: "nvk"
    },
    {
      Name: "Bulletproof email creator",
      Description: "While working at scottish power i created a bullet proof email builder that can handle json to legacy html code conversion.",
      GitHub: "https://github.com/zeeshan595/bulletproof-email-creator",
      Image: "assets/images/npmjs.png",
      ImageAlt: "bulletproof-email-creator"
    }
  ]
};

export default (state: IProjectsState = defaultState, action: Action): IProjectsState => {
  return state;
};
