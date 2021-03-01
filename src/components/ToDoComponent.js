import ToDoRowItem from "./ToDoRowItem";

function ToDoComponent(props) {
    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3>To-Do List</h3>
                </div>
            <ul className="list-group list-group-flush">
                {
                    props.todos.map((todo,index) => (
                        <ToDoRowItem key={index}  task={todo} />
                    ))
                }   
            </ul>
            <div className="card-footer text-muted">
            <button className="btn btn-success">Mark All Complete</button>
            </div>
        </div>
    )
}
export default ToDoComponent;