import logo from './logo.svg';
import ToDoComponent from './components/ToDoComponent';
import './App.css';

function App() {
  const todos = ['Java', 'C++', 'JAvaScript']
  return (
    <div className="container mt-5">
      <ToDoComponent todos={todos}></ToDoComponent>
    </div>
  );
}


export default App;
