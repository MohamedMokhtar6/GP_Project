import {
  Get_Error,
  Create_Course,
  Get_All_Courses,
  Get_One_Course,
} from "../type";
import useGetData from "../../Hooks/UseGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData, useUpdateDataImage } from "../../Hooks/useUpdateData";

export const createCourse = (data) => async (dispatch) => {
  try {
    const respose = await useInsertData(`Common/Course/AddCourse`, data);

    dispatch({
      type: Create_Course,
      payload: respose,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const gatAllCourses = () => async (dispatch) => {
  try {
    const respose = await useGetData("Common/Course/GetAllCourcesAsync");

    dispatch({
      type: Get_All_Courses,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const getOneCourse = (id) => async (dispatch) => {
  try {
    const respose = await useGetData(`Common/Course/GetCourse?CourseId=${id}`);

    dispatch({
      type: Get_One_Course,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
