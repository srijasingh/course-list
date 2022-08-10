import { GET_COURSES_LIST, GET_ENQUIRIES_LIST } from "./Type";

export const getCoursesData = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(getCourses(data));
    });
};

export const getEnquiriesData = () => async (dispatch) => {
  const res = fetch("http://localhost:6700/enquiriesList", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(getEnquiries(data));
    });
};

export const getCourses = (data) => async (dispatch) => {
  dispatch({
    type: GET_COURSES_LIST,
    payload: data ?? null,
  });
};

export const getEnquiries = (data) => async (dispatch) => {
  dispatch({
    type: GET_ENQUIRIES_LIST,
    payload: data ?? null,
  });
};