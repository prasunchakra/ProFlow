import React,{useState} from "react";


function ToDoForm(props) {
    function handleSubmit() {
        if (task.trim().length > 0) {
            props.addTodo(task);
            setTask('')
        }
    }
    const [task, setTask] = useState('');
    return (
    <div className="d-flex mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="Enter new task"
            value={task}
            onChange={e => setTask(e.target.value)}
        />
        <button className="btn btn-primary ml-2" onClick={handleSubmit}>
            Add Task
    </button>
    </div>
    )
}
export default ToDoForm;