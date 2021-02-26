import logo from './logo.svg';
import ToDoRowItem from './components/ToDoRowItem'
import './App.css';

function App() {
  const todos = ['Java', 'C++', 'JAvaScript']
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>To-Do List</h3>
        </div>
        <ul className="list-group list-group-flush">
          <ToDoRowItem task={ todos[0]} />
          <ToDoRowItem task={todos[1]} />
          <ToDoRowItem task={ todos[2]} />
        </ul>
        <div className="card-footer text-muted">
          <button className="btn btn-success">Mark All Complete</button>
        </div>
      </div>
    </div>
  );
}


export default App;
