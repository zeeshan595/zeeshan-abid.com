import { Action } from "redux";
import INavigation from "../../Model/Navigation";
import Homepage from "../../View/Homepage/Homepage";
import ISkill from "../../Model/Skills";

export interface INavigationState {
  Navigation: INavigation[]
  Skills: ISkill[]
}

export const defaultState: INavigationState = {
  Navigation: [
    {
      Path: "/",
      Component: Homepage,
      exact: true
    }
  ],
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

export default (state: INavigationState = defaultState, action: Action): INavigationState => {
  return state;
};
