import UserActionTypes from "./user.types";

export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (errorMessage) => {
  return {
    type: UserActionTypes.SIGN_IN_FAIULRE,
    payload: errorMessage,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signUpStart = (userData) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userData,
  };
};

export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
  };
};
