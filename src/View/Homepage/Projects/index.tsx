import { RootState } from "../../../Controller/Root";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import Projects, { IprojectsProps } from "./Projects";


const mapStateToProps: (state: RootState) => IprojectsProps = (state: RootState) => ({
    Projects: state.Projects.Projects
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    props: IprojectsProps
) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);