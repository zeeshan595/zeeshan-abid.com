import { RootState } from "../../../Controller/Root";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import Intro, { IIntroProps } from "./Intro";


const mapStateToProps: (state: RootState) => IIntroProps = (state: RootState) => ({
    Info: state.Intro.Info
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    props: IIntroProps
) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intro);