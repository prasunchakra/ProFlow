function ToDoRowItem(props) {
    return (
        <li className="list-group-item">
            <input type="checkbox" className="form-check-input" />
            {props.task}
          </li>
    )
};
export default ToDoRowItem;