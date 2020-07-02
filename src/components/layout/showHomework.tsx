import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import styles from "../../assets/showDetail.module.scss";
// import styles1 from "../../assets/theme/button.module.scss";
import styles2 from "../../assets/theme/title.module.scss";
import {
  markDone,
  deleteHomework,
  showError,
  showSuccess,
  updateHomework,
} from "../../actions/actions";
import TextInput from "../InputComponents/TextInput";
import TextArea from "../InputComponents/TextArea";
import ButtonComponent from "../ButtonComponents/Button";
import TitleBox from "../TitleBox/Title";
import SuccessBox from "../Layout/SuccessBox";
import ErrorBox from "../Layout/ErrorBox";
import classNames from "classnames";
import { isDue } from '../utils/utils';

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
    title: foundHomework ? foundHomework.title :'',
    description: foundHomework ? foundHomework.description :'',
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
      className={classNames(styles["show-homework"], "show-homework")}
      onSubmit={handleSubmit}
    >
      {foundHomework ? (
        <div className={classNames(styles.homework, "homework")}>
          <TitleBox
            text={foundHomework.title}
            className={classNames(styles2["main-title"])}
          />
          {isError.show ? <ErrorBox /> : ""}
          {isSuccess.show ? <SuccessBox /> : ""}
          <small className={classNames(styles.created)}>
            Created at{" "}
            {moment(foundHomework.createdDate).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </small>
          <div className={classNames(styles.section, "section", "title")}>
            <span className={classNames(styles["span-title"])}>Title</span>
            <TextInput
              name="title"
              placeholder="Title"
              value={title}
              handleChange={handleChange}
              required={true}
              disabled={
                isDue(foundHomework.homeworkDue)
                  ? false
                  : true
              }
              className={classNames(styles["title-input"])}
            />
          </div>
          <div className={classNames(styles.section, "section", "std")}>
            <span className={classNames(styles["span-title"])}>Standard</span>
            <p>: {foundHomework.standard}</p>
          </div>
          <div className={classNames(styles.section, "section", "subject")}>
            <span className={classNames(styles["span-title"])}>Subject</span>
            <p>: {foundHomework.subject}</p>
          </div>
          <div className={classNames(styles.section, "section", "description")}>
            <span className={classNames(styles["span-title"])}>
              Description
            </span>
            <TextArea
              name="description"
              placeholder="Description"
              value={description}
              handleChange={handleChange}
              required={true}
              disabled={
                isDue(foundHomework.homeworkDue)
                  ? false
                  : true
              }
              className={classNames(styles["title-input"])}
            />
          </div>
          <div
            className={`${styles.section} section ${
              isDue(foundHomework.homeworkDue)
                ? styles.pending
                : styles.dueIn
            } ${foundHomework.isChecked ? styles.hide : ""}`}
          >
            <p>
              {isDue(foundHomework.homeworkDue)
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
              // className={classNames(
              //   styles1.delete,
              //   styles1["outline-btn"],
              //   "delete"
              // )}
              className='delete outline-btn'
              handleClick={() => {
                deleteHomework(id);
                history.push("/");
              }}
              text={"Delete"}
            />
            <ButtonComponent
            handleClick={handleSubmit}
              className={`update outline-btn ${
                foundHomework.isChecked ||
                !isDue(foundHomework.homeworkDue)
                  ? styles.hide
                  : ""
              } update`}
              text='Update'
            />
            <ButtonComponent
              className={`done outline-btn ${ 
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
