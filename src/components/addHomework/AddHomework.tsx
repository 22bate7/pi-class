import React, { useState } from "react";
import styles from "../../assets/addHomework.module.scss";
import { XIcon } from "@primer/octicons-react";
import { connect } from "react-redux";
import { hidePopup, showError, addHomework } from "../../actions/actions";
import ErrorBox from "../layout/errorBox";
import { v4 as genId } from "uuid";
import TextInput from "../inputComponents/textInput";
import TextArea from "../inputComponents/TextArea";
import FileDateTimeInput from "../inputComponents/FileDateTimeInput";
import ButtonComponent from "../buttonComponents/button";

interface Props {
  homework: any;
  hidePopup: any;
  showError: any;
  addHomework: any;
}

const AddHomework: React.FunctionComponent<Props> = (props) => {
  const { homework, hidePopup, showError, addHomework } = props;

  interface HomeworkDataType {
    standard: string;
    subject: string;
    title: string;
    description: string;
    otherFiles: string;
    homeworkDue: Date;
    id: string;
    createdDate: Date;
    isChecked: boolean;
  }

  const HomeworkInitState: HomeworkDataType = {
    standard: "",
    subject: "",
    title: "",
    description: "",
    otherFiles: "",
    homeworkDue: new Date(),
    id: genId(),
    createdDate: new Date(),
    isChecked: false,
  };

  interface Dues {
    dueDate: string;
    dueTime: string;
  }
  const initDues: Dues = {
    dueDate: "",
    dueTime: "",
  };

  const [homeworkData, setHomeworkData] = useState(HomeworkInitState);
  const [dues, setDues] = useState(initDues);
  const { dueDate, dueTime } = dues;
  const { standard, subject, title, description, otherFiles } = homeworkData;

  const hideAddHomework = () => {
    hidePopup();
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    if (e.target.name.includes("due")) {
      setDues({
        ...dues,
        [e.target.name]: e.target.value,
      });
    } else {
      setHomeworkData({
        ...homeworkData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const homeworkDue = new Date(`${dueDate}T${dueTime}`);
    if (homeworkData.standard === "" || homeworkData.standard === "Standard") {
      console.log("Please select standard");
      showError("Please select standard");
    } else if (
      homeworkData.title.trim() === "" ||
      homeworkData.description.trim() === "" ||
      dues.dueDate.trim() === "" ||
      dues.dueTime.trim() === ""
    ) {
      showError("Please fill out all fields");
    } else if (
      homeworkData.subject === "" ||
      homeworkData.standard === "Subject"
    ) {
      console.log("Please select subject");
      showError("Please select subject");
    } else if (new Date(dueDate).valueOf() - new Date().valueOf() <= 0) {
      console.log(dueDate);
      showError("Please select correct Date");
    } else {
      homeworkData.homeworkDue = homeworkDue;
      addHomework(homeworkData);
      hideAddHomework();
      setHomeworkData({
        ...homeworkData,
        standard: "",
        subject: "",
        title: "",
        description: "",
        otherFiles: "",
        id: "",
      });
      setDues({
        dueDate: "",
        dueTime: "",
      });
    }
  };

  return (
    <React.Fragment>
      {homework.showPopup ? (
        <div
          className={
            homework.showPopup
              ? `${styles.addHomework} ${styles.show} addHomework`
              : `${styles.hide} hide`
          }
        >
          <form
            className={`${styles["addHomework-form"]} addHomework-form`}
            onSubmit={handleSubmit}
          >
            <div
              className={`${styles["close-icon"]} close-icon`}
              onClick={hideAddHomework}
            >
              <XIcon size={24} />
            </div>
            {homework.showError.show ? <ErrorBox /> : ""}
            <h1>Create Assignment</h1>
            <small>Add Homework / Classwork Details</small>
            <div className="group">
              <select
                name="standard"
                className={`${styles["class-select"]} class-select`}
                value={standard}
                onChange={handleChange}
                required
              >
                <option>Standard</option>
                <option value="2nd-A">2nd - A</option>
                <option value="2nd-B">2nd - B</option>
                <option value="2nd-C">2nd - C</option>
                <option value="2nd-D">2nd - D</option>
              </select>
              <select
                name="subject"
                className={`${styles["subject-select"]} subject-select`}
                value={subject}
                onChange={handleChange}
                required
              >
                <option>Subject</option>
                <option value="Computer">Computer</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>
            <TextInput
              name="title"
              placeholder="Title"
              value={title}
              handleChange={handleChange}
              required={true}
              disabled={false}
              className="input"
            />
            <TextArea
              name="description"
              placeholder="Description"
              value={description}
              handleChange={handleChange}
              required={true}
              disabled={false}
              className="textarea"
            />
            <div className={`${styles.group} group`}>
              <FileDateTimeInput
                type="date"
                name="dueDate"
                value={dueDate}
                handleChange={handleChange}
                required={true}
                className="input"
              />
              <FileDateTimeInput
                type="time"
                name="dueTime"
                value={dueTime}
                handleChange={handleChange}
                required={true}
                className="input"
              />
              <FileDateTimeInput
                type="file"
                name="otherFiles"
                value={otherFiles}
                handleChange={handleChange}
                required={false}
                className="input"
              />
            </div>
            <ButtonComponent
              className={styles["addHomework-btn"] + " addHomework-btn"}
              handleClick={handleSubmit}
              text={"Add Homework"}
            />
          </form>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    homework: state.homework,
  };
};

export default connect(mapStateToProps, {
  hidePopup,
  showError,
  addHomework,
})(AddHomework);
