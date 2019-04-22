import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

//Reducers
import NavigationReducer, { INavigationState } from "./Navigation/Reducer";

export type RootState = {
  Navigation: INavigationState
};

export const RootEpic = combineEpics(
);
export const RootReducer = combineReducers({
  Navigation: NavigationReducer
}); 