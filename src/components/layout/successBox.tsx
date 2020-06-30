import React from "react";
import { connect } from "react-redux";
import AlertBox from "../alertBox/alertBox";

interface Props {
  msg: string;
}

const ErrorBox: React.FunctionComponent<Props> = ({ msg }) => {
  return <AlertBox className="success" msg={msg} />;
};

const mapStateToProps = (state: any) => {
  return {
    msg: state.homework.showSuccess.msg,
  };
};

export default connect(mapStateToProps)(ErrorBox);
