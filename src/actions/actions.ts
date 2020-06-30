import {
  SELECT_CATAGORY,
  SHOW_POPUP,
  HIDE_POPUP,
  SHOW_ERROR,
  HIDE_ERROR,
  ADD_HOMEWORK,
  MARK_DONE,
  DELETE_HOMEWORK,
  SHOW_SUCCESS,
  HIDE_SUCCESS,
  UPDATE_HOMEWORK,
} from "./types";

export const selectCatagory = (catagory: string) => (dispatch: any) => {
  dispatch({
    type: SELECT_CATAGORY,
    payload: {
      catagory,
    },
  });
};

export const showPopup = () => (dispatch: any) => {
  dispatch({
    type: SHOW_POPUP,
    payload: {
      showPopup: true,
    },
  });
};

export const hidePopup = () => (dispatch: any) => {
  dispatch({
    type: HIDE_POPUP,
    payload: {
      showPopup: false,
    },
  });
};

export const showError = (msg: string) => (dispatch: any) => {
  dispatch({
    type: SHOW_ERROR,
    payload: {
      msg,
    },
  });

  setTimeout(() => {
    dispatch({
      type: HIDE_ERROR,
    });
  }, 5000);
};

export const addHomework = (homework: any) => (dispatch: any) => {
  dispatch({
    type: ADD_HOMEWORK,
    payload: {
      homework,
    },
  });
};

export const markDone = (id: string) => (dispatch: any) => {
  dispatch({
    type: MARK_DONE,
    payload: {
      id,
    },
  });
};

export const deleteHomework = (id: string) => (dispatch: any) => {
  dispatch({
    type: DELETE_HOMEWORK,
    payload: {
      deleteId: id,
    },
  });
};

export const showSuccess = (msg: string) => (dispatch: any) => {
  dispatch({
    type: SHOW_SUCCESS,
    payload: {
      msg,
    },
  });

  setTimeout(() => {
    dispatch({
      type: HIDE_SUCCESS,
    });
  }, 5000);
};

export const updateHomework = ({ id, title, description }: any) => (
  dispatch: any
) => {
  dispatch({
    type: UPDATE_HOMEWORK,
    payload: {
      updateId: id,
      title,
      description,
    },
  });
};
