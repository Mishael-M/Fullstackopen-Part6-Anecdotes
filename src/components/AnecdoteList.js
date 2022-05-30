import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { voteFilter } from '../reducers/filterReducer';
import {
  removeNotification,
  updateNotification,
} from '../reducers/notificationReducer';
import store from '../reducers/store';

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
    dispatch(voteFilter(id));
    const state = store.getState().anecdotes;
    const anecdoteToChange = state.find((n) => n.id === id);
    dispatch(updateNotification(`you voted ${anecdoteToChange.content}`));
    setTimeout(function () {
      dispatch(removeNotification());
    }, 5000);
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
