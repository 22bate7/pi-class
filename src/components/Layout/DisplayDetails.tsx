import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@primer/octicons-react";
import styles1 from "../../assets/displaySection.module.scss";
import styles2 from "../../assets/displayDetails.module.scss";
import styles from "../../assets/theme/title.module.scss";
import TitleBox from "../TitleBox/Title";
import moment from "moment";
import classNames from "classnames";

interface Props {
  showView: string;
  homework: any;
  match: any;
}

const DisplayDetails: React.FunctionComponent<Props> = ({
  match,
  homework: { homeworks },
}) => {
  const homeworksOf = match.params.name;
  const catagory = match.params.catagory;

  // eslint-disable-next-line array-callback-return
  const results = homeworks.filter((homework: any) => {
    return (
      (catagory === "class" && homework.standard === homeworksOf) ||
      (catagory === "subject" && homework.subject === homeworksOf)
    );
  });

  return (
    <div className={`${styles1.section} ${styles2.section} section`}>
      <TitleBox
        text={`Homework of ${homeworksOf}`}
        className={classNames(styles["main-title"])}
      />
      <div className={styles2.tags}>
        <span>Date</span>
        <span>Title</span>
        <span>Subject</span>
        <span>Status</span>
        <span>
          <ChevronRightIcon size={20} />
        </span>
      </div>
      {results && results.length > 0 ? (
        results.map((result: any) => (
          <Link
            to={`/homework/${result.id}`}
            className={`${result.isChecked ? styles2.done : ""} ${
              styles1.part
            } ${styles2.part} part ${
              result.homeworkDue.getTime() - new Date().getTime() >= 0
                ? ""
                : styles2.due
            }`}
            key={Math.random()}
          >
            <span>
              {moment(result.createdDate).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
            <span className={classNames(styles1["part-title"], "part-title")}>
              {result.title}
            </span>
            <span>{result.subject}</span>
            <p>
              {result.isChecked
                ? "Checked"
                : result.homeworkDue.getTime() - new Date().getTime() >= 0
                ? "Viewing"
                : "Due"}
            </p>
            <ChevronRightIcon size={20} />
          </Link>
        ))
      ) : (
        <p>No Homework Available</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    homework: state.homework,
  };
};

export default connect(mapStateToProps)(DisplayDetails);
