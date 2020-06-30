import {
  SHOW_POPUP,
  HIDE_POPUP,
  SHOW_ERROR,
  HIDE_ERROR,
  ADD_HOMEWORK,
  MARK_DONE,
  DELETE_HOMEWORK,
} from "../actions/types";
import { v4 as genId } from "uuid";

const initState = {
  showPopup: false,
  showError: {
    msg: "",
    show: false,
  },
  homeworks: [
    {
      createdDate: new Date(),
      standard: "2nd-A",
      subject: "Physics",
      title: "Ex-2 of phy 2a",
      description: "Try to complete all the sums ",
      homeworkDue: new Date("2020-06-30T22:50:00"),
      otherFiles: null,
      id: "1",
      isChecked: false,
    },
    {
      createdDate: new Date(),
      standard: "2nd-B",
      subject: "Maths",
      title: "Ex-2 of mth 2b",
      description: "Try to complete all the sums",
      homeworkDue: new Date(),
      otherFiles: null,
      id: genId(),
      isChecked: true,
    },
    {
      createdDate: new Date(),
      standard: "2nd-C",
      subject: "Computer",
      title: "Ex-2 of com 2c",
      description: "Try to complete all the sums",
      homeworkDue: new Date(),
      otherFiles: null,
      id: genId(),
      isChecked: true,
    },
    {
      createdDate: new Date(),
      standard: "2nd-A",
      subject: "Chemistry",
      title: "Ex-2 of che 2a",
      description: "Try to complete all the sums",
      homeworkDue: new Date(),
      otherFiles: null,
      id: genId(),
      isChecked: false,
    },
  ],
};

const homeworkReducer = (state = initState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_POPUP:
      return {
        ...state,
        showPopup: payload.showPopup,
      };

    case HIDE_POPUP:
      return {
        ...state,
        showPopup: payload.showPopup,
      };

    case SHOW_ERROR:
      return {
        ...state,
        showError: {
          msg: payload.msg,
          show: true,
        },
      };

    case HIDE_ERROR:
      return {
        ...state,
        showError: {
          msg: "",
          show: false,
        },
      };

    case ADD_HOMEWORK:
      const homeworks = [...state.homeworks];
      homeworks.push(payload.homework);
      return {
        ...state,
        homeworks,
      };

    case MARK_DONE:
      const { id } = payload;
      const newHomeworksState = state.homeworks.map((homework: any) => {
        if (homework.id === id) {
          homework.isChecked = true;
        }
        return homework;
      });
      return {
        ...state,
        homeworks: newHomeworksState,
      };

    case DELETE_HOMEWORK:
      let { deleteId } = payload;
      const newHomeworks = state.homeworks.filter((homework: any) => {
        return homework.id !== deleteId;
      });
      return {
        ...state,
        homeworks: newHomeworks,
      };

    default:
      return state;
  }
};

export default homeworkReducer;
