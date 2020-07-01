import { SELECT_CATAGORY } from "../actions/types";

const initState = {
  catagories: ["Class-wise", "Subject-wise"],
  selectedCatagory: "Class-wise",
  classes: [
    "2nd-A",
    "2nd-B",
    "2nd-C",
    "2nd-D",
    "3rd-A",
    "3rd-B",
    "3rd-C",
    "3rd-D",
  ],
  subjects: [
    "Computer",
    "Maths",
    "Physics",
    "Chemistry",
    "English",
    "Social-Science",
    "Economics",
    "Coding",
  ],
};

const catagoryReducer = (state = initState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CATAGORY:
      return {
        ...state,
        selectedCatagory: payload.catagory,
      };

    default:
      return state;
  }
};

export default catagoryReducer;
