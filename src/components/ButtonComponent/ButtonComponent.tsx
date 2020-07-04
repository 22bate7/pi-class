import React from "react";
import styles from "../../assets/theme/button.module.scss";
import classNames from "classnames";

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
  let classes:any = [];
  const names =   className.split(' ');
  names.forEach((name:string)=>{
    classes.push(classNames(styles[name],name))
  })
  console.log(classes);
  console.log(classes.join(' '));
  return (
    <button
      className={classes.join(' ')}
      onClick={buttonClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
