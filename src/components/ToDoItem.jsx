import React from 'react';

const ToDoItem = ({ todo, toggleToDo }) => {
    const { id, label, done } = todo;
    const ToDoClick = () =>{
        toggleToDo(id);
        };
    return (
        <label className='list-group-item'>
            <input className='form-check-input me-1' type="checkbox" checked={done} onChange={ToDoClick} />
            {label}
        </label>
    );
}

export default ToDoItem;