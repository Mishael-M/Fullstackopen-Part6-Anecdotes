import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
let timeoutID = 0;

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    updateNotification(state, action) {
      const content = action.payload;
      return content;
    },
    removeNotification(state, action) {
      const content = '';
      return content;
    },
  },
});

export const { updateNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (content, time) => {
  return async (dispatch) => {
    clearTimeout(timeoutID);
    dispatch(updateNotification(content));
    timeoutID = setTimeout(function () {
      dispatch(removeNotification());
    }, time * 1000);
  };
};
export default notificationSlice.reducer;
