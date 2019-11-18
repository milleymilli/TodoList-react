import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const ToDo = props => {
    return props.todos.map(item => (
        <TodoItem
            key={item.id}
            myItem={item}
            toggleComplete={props.toggleComplete}
            deletItem={props.deletItem}
        />
    ));
};
// we can not pass state through components

ToDo.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default ToDo;
