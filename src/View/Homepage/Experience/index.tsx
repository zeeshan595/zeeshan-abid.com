import { RootState } from "../../../Controller/Root";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import Experience, { IExperienceProps } from "./Experience";


const mapStateToProps: (state: RootState) => IExperienceProps = (state: RootState) => ({
    Experience: state.Experience.Experience
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    props: IExperienceProps
) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Experience);