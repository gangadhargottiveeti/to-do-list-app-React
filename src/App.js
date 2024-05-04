import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/ToDoList/TodoList';

function App() {

  return (
    <div className='TodoApp'>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
