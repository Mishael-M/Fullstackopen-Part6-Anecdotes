import { useDispatch } from 'react-redux';
import { filterAnecdote } from '../reducers/filterReducer';
import store from '../reducers/store';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const content = event.target.value;
    const anecdotesState = store.getState().anecdotes;
    dispatch(filterAnecdote({ content, anecdotesState }));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
