import AnecdoteForm from './components/AnecdoteForm';
import AnecdotesList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
