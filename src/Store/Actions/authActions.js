export const signIn = credentials => {
  return (dispatch, getState) => {
    console.log({
      email: credentials.email,
      password: credentials.password
    });
    dispatch({ type: "LOGIN_SUCCESS" });
  };
};

export const register = newUser => {
  return (dispatch, getState) => {
    console.log({
      username: newUser.username
    });
    dispatch({ type: "SIGNUP_SUCCESS" });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    console.log("User is signed out.");
    dispatch({ type: "SIGNOUT_SUCCESS" });
  };
};
