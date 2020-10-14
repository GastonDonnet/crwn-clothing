import UserActionTypes from "./user.types";

const initialState = {
  currentUser: null,
  error: null,
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, error: null };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };

    case UserActionTypes.SIGN_UP_FAIULRE:
    case UserActionTypes.SIGN_OUT_FAIULRE:
    case UserActionTypes.SIGN_IN_FAIULRE:
      return { ...state, error: payload };

    default:
      return state;
  }
};
