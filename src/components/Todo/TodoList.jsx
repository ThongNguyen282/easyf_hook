import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
};

function TodoList(props) {
    const { todos, onTodoClick } = props;

    const handleClick = (todo) => {
        console.log(todo);
        if (onTodoClick) {
            onTodoClick(todo);
        }
    };
    return (
        <ul className="todo-list">
            {todos.map((todo) => {
                return (
                    <li
                        key={todo.id}
                        onClick={() => {
                            handleClick(todo);
                        }}
                    >
                        {todo.title}{" "}
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
