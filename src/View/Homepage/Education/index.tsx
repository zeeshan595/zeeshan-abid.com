import { RootState } from "../../../Controller/Root";
import Skills, { IEducationsProps } from "./Education";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";


const mapStateToProps: (state: RootState) => IEducationsProps = (state: RootState) => ({
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    props: IEducationsProps
) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skills);