import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleToDo }) => {
    return (
        <div className='list-group'>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleToDo= {toggleToDo} />
            ))}
        </div>
    );
}

export default ToDoList;