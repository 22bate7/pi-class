import React from "react";

interface Props {
  className: string;
  text: string;
}

const TitleBox: React.FunctionComponent<Props> = ({ className, text }) => {
  return <h1 className={className}>{text}</h1>;
};

export default TitleBox;
