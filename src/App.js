import AnecdoteForm from './components/AnecdoteForm';

import AnecdotesList from './components/AnecdoteList';
const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdotesList />
    </div>
  );
};

export default App;
