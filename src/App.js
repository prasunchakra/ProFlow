import React, { useState }  from 'react';
import ToDoComponent from './components/ToDoComponent';
import './App.css';
  
function App() {
  const [todos, setTodos] = useState(['Java', 'C++', 'JAvaScript'])
  function addTodo() {
   setTodos(todos => [...todos, 'Python'])
  }
  return (
    <div className="container mt-5">
      <ToDoComponent todos={todos}></ToDoComponent>
      <button className="btn btn-primary" onClick={addTodo}>Add New Todo</button>
    </div>
  );
}


export default App;
