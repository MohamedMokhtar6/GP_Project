import { Get_Error, CREATE_USER, GET_ALL_USERS, DELETE_USER } from "../type";
import useGetData from "../../Hooks/UseGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData, useUpdateDataImage } from "../../Hooks/useUpdateData";

export const createUser = (data) => async (dispatch) => {
  try {
    const respose = await useInsertData(`Common/Student/AddStudent`, data);

    dispatch({
      type: CREATE_USER,
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
export const getUsers = () => async (dispatch) => {
  try {
    const respose = await useGetData("Common/Student/GetStudents");

    dispatch({
      type: GET_ALL_USERS,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const respose = await useDeleteData(
      `Common/Student/DeleteStudent?id=${id}`
    );

    dispatch({
      type: DELETE_USER,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
