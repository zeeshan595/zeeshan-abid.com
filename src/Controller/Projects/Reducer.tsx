import { Action } from "redux";
import IProjects from "../../Model/Projects";

export interface IProjectsState {
  Projects: IProjects[]
}

export const defaultState: IProjectsState = {
  Projects: [
    {
      Name: "Machine Learning",
      Description: "In my university I created my own custom neural network library using C++ and used this library to compare different techniques to train the neural network (BP, PSO, GA).",
      GitHub: "https://github.com/zeeshan595/Neural-Network/blob/master/Honours%20Project.pdf",
      Image: "https://raw.githubusercontent.com/tortuga-foundation/tortuga/master/Assets/Images/Render/machine-learning.jpg",
      ImageAlt: "machine-learning"
    },
    {
      Name: "Portfolio Website",
      Description: "This website was created in react with MVC framework. In addition, it also has a CI/CD pipeline with GitHub Actions and is deployed using google cloud platform.",
      GitHub: "https://github.com/zeeshan595/zeeshan-abid.com",
      Image: "/assets/images/react.png",
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
      Image: "/assets/images/nvk.png",
      ImageAlt: "nvk"
    },
    {
      Name: "Bulletproof email creator",
      Description: "While working at scottish power i created a bullet proof email builder that can handle json to legacy html code conversion.",
      GitHub: "https://github.com/zeeshan595/bulletproof-email-creator",
      Image: "/assets/images/npmjs.png",
      ImageAlt: "bulletproof-email-creator"
    }
  ]
};

export default (state: IProjectsState = defaultState, action: Action): IProjectsState => {
  return state;
};
