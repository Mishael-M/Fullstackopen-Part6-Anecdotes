import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterAnecdote(state, action) {
      const content = action.payload.content;
      const anecdotesState = action.payload.anecdotesState;
      return anecdotesState.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(content)
      );
    },
    voteFilter(state, action) {
      const id = action.payload.id;
      const anecdotesState = action.payload.filterState;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      let newState = anecdotesState.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

      // sort by votes
      return newState.sort(function (a, b) {
        return b.votes - a.votes;
      });
    },
  },
});

export const { filterAnecdote, voteFilter } = filterSlice.actions;

export default filterSlice.reducer;
