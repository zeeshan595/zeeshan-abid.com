import { combineReducers } from "redux";

//Reducers
import NavigationReducer, { INavigationState } from "./Navigation/Reducer";
import SkillsReducer, { ISkillsState } from "./Skills/Reducer";
import IntroReducer, { IIntroState } from "./Intro/Reducer";
import ExperienceReducer, { IExperienceState } from "./Experience/Reducer";
import ProjectReducer, { IProjectsState } from "./Projects/Reducer";

export type RootState = {
  Navigation: INavigationState,
  Skills: ISkillsState,
  Intro: IIntroState,
  Experience: IExperienceState,
  Projects: IProjectsState
};

export const RootReducer = combineReducers({
  Navigation: NavigationReducer,
  Skills: SkillsReducer,
  Intro: IntroReducer,
  Experience: ExperienceReducer,
  Projects: ProjectReducer
}); 