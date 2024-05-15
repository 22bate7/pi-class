import React from "react";

interface Props {
  className: string;
  msg: string;
}

const AlertBox: React.FunctionComponent<Props> = ({ className, msg }) => {
  return <div className={className}>{msg}</div>;
};

export default AlertBox;
