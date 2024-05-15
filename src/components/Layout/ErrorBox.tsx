import React from "react";
import { connect } from "react-redux";
import AlertBox from "../AlertComponent/AlertComponent";

interface Props {
  msg: string;
}

const ErrorBox: React.FunctionComponent<Props> = ({ msg }) => {
  return <AlertBox className="error" msg={msg} />;
};

const mapStateToProps = (state: any) => {
  return {
    msg: state.homework.showError.msg,
  };
};

export default connect(mapStateToProps)(ErrorBox);
