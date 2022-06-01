import { connect } from 'react-redux';
import { filterAnecdote } from '../reducers/filterReducer';
import store from '../store';

const Filter = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    const content = event.target.value;
    const anecdotesState = store.getState().anecdotes;
    props.filterAnecdote({ content, anecdotesState });
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

const ConnectedFilter = connect(null, { filterAnecdote })(Filter);
export default ConnectedFilter;
