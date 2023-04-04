import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../Redux/Actions/userAction";
const ViewAllUserHook = () => {
  const dispatch = useDispatch();
  const getAllUser = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const allUser = useSelector((state) => state.UserReducer.allUsers);

  let users = [];
  try {
    if (allUser) {
      users = allUser;
      //   console.log(users.status);
      //   console.log(users.responseObject);
    } else {
      users = [];
    }
  } catch (error) {
    console.log(error);
  }
  return [users.responseObject];
};

export default ViewAllUserHook;
