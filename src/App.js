import React, { useState }  from 'react';
import ToDoComponent from './components/ToDoComponent';
import ToDoForm from './components/ToDoForm';
import './App.css';
  
function App() {
  const [todos, setTodos] = useState(['Java', 'C++', 'JAvaScript'])
  function addTodo(task) {
   setTodos(todos => [...todos, task])
  }
  return (
    <div className="container mt-5">
      <ToDoComponent todos={todos}></ToDoComponent>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}


export default App;
