import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@primer/octicons-react";
import styles from "../../assets/displaySection.module.scss";
import classNames from "classnames";

interface Props {
  showView: string;
  catagory: any;
}

const DisplaySection: React.FunctionComponent<Props> = ({
  showView,
  catagory,
}) => {
  if (showView.toLowerCase().includes("class")) {
    return (
      <div className={`${styles.section} section`}>
        {catagory.classes.map((standard: string) => (
          <Link
            to={`/homeworks/class/${standard}`}
            className={`${styles.part} part`}
            key={Math.random()}
          >
            <span className={classNames(styles["part-title"], "part-title")}>
              {standard}
            </span>
            <ChevronRightIcon size={20} />
          </Link>
        ))}
      </div>
    );
  } else if (showView.toLowerCase().includes("subject")) {
    return (
      <div className={classNames(styles.section, "section")}>
        {catagory.subjects.map((subject: string) => (
          <Link
            to={`/homeworks/subject/${subject}`}
            className={`${styles.part} part`}
            key={Math.random()}
          >
            <span className={classNames(styles["part-title"], "part-title")}>
              {subject}
            </span>
            <ChevronRightIcon size={20} />
          </Link>
        ))}
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
};

const mapStateToProps = (state: any) => {
  return {
    catagory: state.catagory,
  };
};

export default connect(mapStateToProps)(DisplaySection);
