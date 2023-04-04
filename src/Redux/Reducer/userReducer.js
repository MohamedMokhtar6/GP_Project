import { CREATE_USER, DELETE_USER, GET_ALL_USERS } from "../type";

const inital = {
  loading: true,
  user: [],
  allUsers: [],
  updateUsers: [],
  deleteUser: [],
};
const userReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
        allUsers: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: true,
        deleteUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
