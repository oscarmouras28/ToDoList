import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import ToDoList from "./components/ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";


export function App() {

    const [todos, setTodos] = useState([{ id: "example", label: "", done: false },]);
    const ToDoRef = useRef();
    const toggleToDo = (id) => {
        const NewToDos = [...todos];
        const todo = NewToDos.find((todo) => todo.id === id);
        todo.done = !todo.done;
        setTodos(NewToDos);
    }
    const addToDo = () => {
        const label = ToDoRef.current.value;
        if (label === '') return;
        setTodos((prevTodo) => {
            return [...prevTodo, { id: uuid(), label, done: false }]
        })
        ToDoRef.current.value = null;
    }

    const deleteToDo = () => {
        const NewToDos = todos.filter((todo) => !todo.done)
        setTodos(NewToDos);
    }
    return (
        <div >
            <Header />
            <div className="container">
                <div class="input-group mb-3">
                    <a onClick={addToDo}><span class="input-group-text" id="basic-addon1">✏️+</span></a>
                    <input  ref={ToDoRef}  type="text" className="form-control" placeholder="Ingresar Tarea" aria-label="Username" aria-describedby="basic-addon1" />
                <button onClick={deleteToDo} class="btn btn-danger">Limpiar</button>
                </div>

                <ToDoList todos={todos} toggleToDo={toggleToDo} />
                <div class="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: (100 / todos.filter((todos) => !todos.done).length) * (todos.filter((todos) => !todos.done).length - todos.filter((todos) => todos.done).length) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">falta por enchular esto</div>
                </div>
            </div>
            {console.log(100 / (todos.length - todos.filter((todos) => !todos.done).length) === Number.POSITIVE_INFINITY ? 0 : 100 / (todos.length - todos.filter((todos) => !todos.done).length))}
        </div>
    );
}