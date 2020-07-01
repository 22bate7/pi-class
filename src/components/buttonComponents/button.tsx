import React from "react";

interface Props {
  className: string;
  handleClick: any;
  text: string;
}

const ButtonComponent: React.FunctionComponent<Props> = ({
  className,
  handleClick,
  text,
}) => {
  const buttonClick = (e: any) => {
    handleClick(e);
  };

  return (
    <button className={className} onClick={buttonClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
