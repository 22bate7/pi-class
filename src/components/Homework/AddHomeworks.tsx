import React, { useState } from "react";
import styles from "../../assets/addHomework.module.scss";
// import styles1 from "../../assets/theme/button.module.scss";
import { XIcon } from "@primer/octicons-react";
import { connect } from "react-redux";
import { showError, addHomework } from "../../actions/actions";
import ErrorBox from "../Layout/ErrorBox";
import { v4 as genId } from "uuid";
import TextInput from "../InputComponent/Text";
import TextArea from "../InputComponent/TextAreaComponent";
import FileDateTimeInput from "../InputComponent/FileTimeDateInput";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import classNames from "classnames";

//PropTypes
interface Props {
  homework: any;
  handleClose:any;
  showError: any;
  addHomework: any;
  showPopup:boolean
}

const AddHomework: React.FunctionComponent<Props> = (props) => {
  const { 
    homework,
    showPopup, 
    showError, 
    addHomework ,
    handleClose
  } = props;

  //interface for homework data 
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

  //default value for homework data
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

  //interface for Dates (We are storing due like 22nd June 2020T02:06:55 so for that take this two inputs and from this we convert them in to required format)
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

  //whenever we input any input any field we store them using useState hook in homeworkData
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

  //Add homework when submit the form with some validation
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const homeworkDue = new Date(`${dueDate}T${dueTime}`);
    //make sure std and sub are selected
    if (homeworkData.standard === "" || homeworkData.standard === "Standard") {
      console.log("Please select standard");
      showError("Please select standard");
    } 
    else if (
      homeworkData.subject === "" ||
      homeworkData.standard === "Subject"
    ) {
      console.log("Please select subject");
      showError("Please select subject");
    } 
    //make sure title,desc,dues are selected , selecting file is not mandatory
    else if (
      homeworkData.title.trim() === "" ||
      homeworkData.description.trim() === "" ||
      dues.dueDate.trim() === "" ||
      dues.dueTime.trim() === ""
    ) {
      showError("Please fill out all fields");
    } 
    //make sure due date is not smaller than current date
    else if (new Date(dueDate).valueOf() - new Date().valueOf() <= 0) {
      console.log(dueDate);
      showError("Please select correct Date");
    } 
    //all data are according then add homework
    else {
      homeworkData.homeworkDue = homeworkDue;
      addHomework(homeworkData);
      handleClose(!showPopup);
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

  //JSX
  return (
    <React.Fragment>
      {showPopup ? (
        <div
          className={
            showPopup
              ? `${styles.addHomework} ${styles.show} addHomework`
              : `${styles.hide} hide`
          }
        >
          <form
            className={classNames(
              styles["addHomework-form"],
              "addHomework-form"
            )}
            onSubmit={handleSubmit}
          >
            <div
              className={classNames(styles["close-icon"], "close-icon")}
              onClick={()=>{handleClose(!showPopup)}}
            >
              <XIcon size={24} />
            </div>
            {homework.showError.show ? <ErrorBox /> : ""}
            <h1>Create Assignment</h1>
            <small>Add Homework / Classwork Details</small>
            <div className="group">
              <select
                name="standard"
                className={classNames(styles["class-select"], "class-select")}
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
                className={classNames(
                  styles["subject-select"],
                  "subject-select"
                )}
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
              className={classNames("input")}
            />
            <TextArea
              name="description"
              placeholder="Description"
              value={description}
              handleChange={handleChange}
              required={true}
              disabled={false}
              className={classNames("textarea")}
            />
            <div className={`${styles.group} group`}>
              <FileDateTimeInput
                type="date"
                name="dueDate"
                value={dueDate}
                handleChange={handleChange}
                required={true}
                className={classNames("input")}
              />
              <FileDateTimeInput
                type="time"
                name="dueTime"
                value={dueTime}
                handleChange={handleChange}
                required={true}
                className={classNames("input")}
              />
              <FileDateTimeInput
                type="file"
                name="otherFiles"
                value={otherFiles}
                handleChange={handleChange}
                required={false}
                className={classNames("input")}
              />
            </div>
            <ButtonComponent
              className="button"
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
  showError,
  addHomework,
})(AddHomework);
