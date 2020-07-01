import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import styles from "../../assets/showDetail.module.scss";
import styles1 from "../../assets/theme/button.module.scss";
import styles2 from "../../assets/theme/title.module.scss";
import {
  markDone,
  deleteHomework,
  showError,
  showSuccess,
  updateHomework,
} from "../../actions/actions";
import TextInput from "../inputComponents/textInput";
import TextArea from "../inputComponents/TextArea";
import ButtonComponent from "../buttonComponents/button";
import TitleBox from "../titleBox/title";
import SuccessBox from "../layout/successBox";
import ErrorBox from "../layout/errorBox";

interface Props {
  match: any;
  homework: any;
  markDone: any;
  deleteHomework: any;
  history: any;
  showError: any;
  showSuccess: any;
  isError: any;
  isSuccess: any;
  updateHomework: any;
}

const ShowHomework: React.FunctionComponent<Props> = ({
  match,
  history,
  homework: { homeworks },
  markDone,
  deleteHomework,
  showError,
  showSuccess,
  isError,
  isSuccess,
  updateHomework,
}) => {
  const id = match.params.id;
  const foundHomework = homeworks.find((homework: any) => homework.id === id);

  const [homeworkData, setHomeworkData] = useState({
    title: foundHomework.title,
    description: foundHomework.description,
  });

  const { title, description } = homeworkData;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title.trim() === "") {
      showError("Please Give Updated Title");
    } else if (description.trim() === "") {
      showError("Please Give Updated Description");
    } else {
      showSuccess("Homework Updated");
    }
    updateHomework({ ...homeworkData, id });
  };
  const handleChange = (e: any) => {
    setHomeworkData({
      ...homeworkData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={`${styles["show-homework"]} show-homework`}
      onSubmit={handleSubmit}
    >
      {foundHomework ? (
        <div className={styles.homework + " homework"}>
          <TitleBox
            text={foundHomework.title}
            className={styles2["main-title"]}
          />
          {isError.show ? <ErrorBox /> : ""}
          {isSuccess.show ? <SuccessBox /> : ""}
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
              value={title}
              handleChange={handleChange}
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
              value={description}
              handleChange={handleChange}
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
              className={styles1.delete + " delete"}
              handleClick={() => {
                deleteHomework(id);
                history.push("/");
              }}
              text={"Delete"}
            />
            <button
              type="submit"
              className={`${[styles1.update]} ${
                foundHomework.isChecked ||
                foundHomework.homeworkDue.getTime() - new Date().getTime() <= 0
                  ? styles.hide
                  : ""
              } update`}
            >
              Update
            </button>
            <ButtonComponent
              className={`${[styles1.done]} ${
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
    </form>
  );
};

const mapStateToProps = (state: any) => {
  return {
    homework: state.homework,
    isError: state.homework.showError,
    isSuccess: state.homework.showSuccess,
  };
};

export default connect(mapStateToProps, {
  markDone,
  deleteHomework,
  showError,
  showSuccess,
  updateHomework,
})(ShowHomework);
