import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import styles from "../../assets/showDetail.module.scss";
import { markDone, deleteHomework } from "../../actions/actions";
import TextInput from "../inputComponents/textInput";
import TextArea from "../inputComponents/TextArea";
import ButtonComponent from "../buttonComponents/button";

interface Props {
  match: any;
  homework: any;
  markDone: any;
  deleteHomework: any;
  history: any;
}

const ShowHomework: React.FunctionComponent<Props> = ({
  match,
  history,
  homework: { homeworks },
  markDone,
  deleteHomework,
}) => {
  const id = match.params.id;
  const foundHomework = homeworks.find((homework: any) => homework.id === id);
  return (
    <div className={`${styles["show-homework"]} show-homework`}>
      {foundHomework ? (
        <div className={styles.homework + " homework"}>
          <h1 className={styles["main-title"]}>{foundHomework.title}</h1>
          <small className={styles.created}>
            Created at{" "}
            {moment(foundHomework.createdDate).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </small>
          <div className={styles.section + " section title"}>
            <span className={styles["span-title"]}>Title</span>
            <TextInput
              name="title"
              placeholder="Title"
              value={foundHomework.title}
              handleChange={() => {}}
              required={true}
              disabled={
                foundHomework.homeworkDue.getTime() - new Date().getTime() >= 0
                  ? false
                  : true
              }
              className={styles["title-input"]}
            />
          </div>
          <div className={styles.section + " section std"}>
            <span className={styles["span-title"]}>Standard</span>
            <p>: {foundHomework.standard}</p>
          </div>
          <div className={styles.section + " section subject"}>
            <span className={styles["span-title"]}>Subject</span>
            <p>: {foundHomework.subject}</p>
          </div>
          <div className={styles.section + " section description"}>
            <span className={styles["span-title"]}>Description</span>
            <TextArea
              name="description"
              placeholder="Description"
              value={foundHomework.description}
              handleChange={() => {}}
              required={true}
              disabled={
                foundHomework.homeworkDue.getTime() - new Date().getTime() >= 0
                  ? false
                  : true
              }
              className={styles["title-input"]}
            />
          </div>
          <div
            className={`${styles.section} section ${
              foundHomework.homeworkDue.getTime() - new Date().getTime() >= 0
                ? styles.pending
                : styles.dueIn
            } ${foundHomework.isChecked ? styles.hide : ""}`}
          >
            <p>
              {foundHomework.homeworkDue.getTime() - new Date().getTime() >= 0
                ? `Homework Due :  ${moment(
                    foundHomework.homeworkDue
                  ).fromNow()} (on ${moment(foundHomework.homeworkDue).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )})`
                : "Homework Due"}
            </p>
          </div>
          <p
            className={`${
              foundHomework.isChecked ? styles.pending : styles.hide
            }`}
          >
            Homework Checked
          </p>
          <div className="btn">
            <ButtonComponent
              className={styles.delete + " delete"}
              handleClick={() => {
                deleteHomework(id);
                history.push("/");
              }}
              text={"Delete"}
            />
            <button
              className={`${[styles.update]} ${
                foundHomework.isChecked ||
                foundHomework.homeworkDue.getTime() - new Date().getTime() <= 0
                  ? styles.hide
                  : ""
              } update`}
            >
              Update
            </button>
            <ButtonComponent
              className={`${[styles.done]} ${
                foundHomework.isChecked ? styles.hide : ""
              } done`}
              handleClick={() => {
                markDone(id);
              }}
              text={"Mark as Checked"}
            />
          </div>
        </div>
      ) : (
        <p>No homework found....!!!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    homework: state.homework,
  };
};

export default connect(mapStateToProps, {
  markDone,
  deleteHomework,
})(ShowHomework);
