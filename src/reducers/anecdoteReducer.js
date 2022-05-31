import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload.sort(function (a, b) {
        return b.votes - a.votes;
      });
    },
  },
});

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAndecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const vote = (id) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    const state = dispatch(setAnecdotes(anecdotes)).payload;
    const anecdoteToChange = state.find((n) => n.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    };
    const anecdoteUpdate = await anecdoteService.update(changedAnecdote);

    const newAnecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(newAnecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newNote));
  };
};

export default anecdoteSlice.reducer;
