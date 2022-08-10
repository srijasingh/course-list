import { GET_ENQUIRIES_LIST, GET_COURSES_LIST } from "./Type";
import { combineReducers } from "redux";

const enquiries = (state = null, action) => {
  switch (action.type) {
    case GET_ENQUIRIES_LIST:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const courses = (state = null, action) => {
    switch (action.type) {
      case GET_COURSES_LIST:
        state = action.payload;
        return state;
      default:
        return state;
    }
  };

const initialState = {
    user: {},
    };

export default combineReducers({
  enquiries:enquiries,
  courses:courses
});
