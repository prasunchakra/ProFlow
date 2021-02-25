import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>To-Do List</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input type="checkbox" className="form-check-input" />
            Task 1
          </li>
          <li className="list-group-item">
            <input type="checkbox" className="form-check-input" />
            Task 2
          </li>
          <li className="list-group-item">
            <input type="checkbox" className="form-check-input" />
            Task 3
          </li>
        </ul>
        <div className="card-footer text-muted">
          <button className="btn btn-success">Mark All Complete</button>
        </div>
      </div>
    </div>
  );
}


export default App;
