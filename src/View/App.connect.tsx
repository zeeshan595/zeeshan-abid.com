import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import App, { AppProps } from "./App";
import { RootState } from "../Controller/Root";

const mapStateToProps: (state: RootState) => AppProps = (state: RootState) => ({
  
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: AppProps
) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
