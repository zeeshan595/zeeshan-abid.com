import { RootState } from "../../../Controller/Root";
import Skills, { ISkillsProps } from "./Skills";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { IAppProps } from "../../App";
import { connect } from "react-redux";


const mapStateToProps: (state: RootState) => ISkillsProps = (state: RootState) => ({
    Skills: state.Skills.Skills
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    props: ISkillsProps
) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skills);