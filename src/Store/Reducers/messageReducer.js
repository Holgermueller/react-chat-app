const initState = {
  messages: []
};

const messageReducer = (state = initState, action) => {
  console.log(action);
};

export default messageReducer;
