import React from "react";

const TodoItem = (props) => {
    return (
        <li className="todo-list-item">
            {/* conditional rendering */}
            {props.completed ? <></> : <input type="checkbox" />} 
            <p className="todo-list-item-name">{props.title}</p>
            <p>...</p>
        </li>
    );
}

export default TodoItem;