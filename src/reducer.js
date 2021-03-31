export const initialState = {
  user: null,
  name: null,
  photo: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action?.user?.uid,
        name: action?.user?.displayName,
        photo: action?.user?.photoURL,
      };

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: null,
        name: null,
        photo: null,
      };

    default:
      return state;
  }
};

export default reducer;
