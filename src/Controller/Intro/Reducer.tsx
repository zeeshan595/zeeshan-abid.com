import { Action } from "redux";
import ISkill from "../../Model/Skills";

export interface IIntroState {
  Info: string[]
}

export const defaultState: IIntroState = {
  Info: [
    "Full stack developer",
    "Games developer",
    "technology enthusiast"
  ]
};

export default (state: IIntroState = defaultState, action: Action): IIntroState => {
  return state;
};
