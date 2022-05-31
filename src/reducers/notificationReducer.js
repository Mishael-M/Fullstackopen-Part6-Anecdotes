import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

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
    dispatch(updateNotification(content));
    setTimeout(function () {
      dispatch(removeNotification());
    }, time * 1000);
  };
};
export default notificationSlice.reducer;
