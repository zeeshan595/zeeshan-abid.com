import { Action } from "redux";
import ISkill from "../../Model/Skills";

export interface ISkillsState {
  Skills: ISkill[]
}

export const defaultState: ISkillsState = {
  Skills: [
    {
      Name: "Front-End Development",
      Skills: [
        "Typescript",
        "Javascript",
        "Angular",
        "React",
        "MVC",
        "JQuery",
        "SASS"
      ]
    },
    {
      Name: "Back-End Development",
      Skills: [
        "NginX",
        "Node JS",
        ".NET Core C#",
        "ASP.NET",
        "Entity Framework"
      ]
    },
    {
      Name: "DevOps",
      Skills: [
        "Azure Portal",
        "Azure DevOps",
        "CI Pipeline (YML)",
        "GitHub Actions",
        "Linux Scripting",
        "Digital Ocean"
      ]
    },
    {
      Name: "Source Control",
      Skills: [
        "GitHub",
        "BitBucket",
        "Git Kraken",
        "Source Tree",
        "Git Command Line"
      ]
    },
    {
      Name: "Game Development",
      Skills: [
        "C / C++",
        "Vulkan",
        "Multi-Threading",
        "GLSL",
        "Unity 3D",
        "SDL"
      ]
    }
  ]
};

export default (state: ISkillsState = defaultState, action: Action): ISkillsState => {
  return state;
};
