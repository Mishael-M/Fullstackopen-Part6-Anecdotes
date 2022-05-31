import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { voteFilter } from '../reducers/filterReducer';
import { setNotification } from '../reducers/notificationReducer';
import store from '../store';

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdotesList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterAnecdotes = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const voteAndUpdateNotification = (id) => {
    dispatch(vote(id));
    const state = store.getState().anecdotes;
    const filterState = store.getState().filters;
    if (filterState.length > 0) {
      dispatch(voteFilter({ id, filterState }));
    }
    const anecdoteToChange = state.find((n) => n.id === id);
    dispatch(setNotification(`you voted ${anecdoteToChange.content}`, 1));
  };

  return store.getState().filters.length > 0 ? (
    <div>
      {filterAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => voteAndUpdateNotification(anecdote.id)}
        />
      ))}
    </div>
  ) : (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => voteAndUpdateNotification(anecdote.id)}
        />
      ))}
    </div>
  );
};

export default AnecdotesList;
