import React, {useState} from 'react';
import TodoUpdate from "./TodoUpdate";
import {MdDeleteForever} from 'react-icons/md'

import axios from "axios";
import {FaRegEdit} from "react-icons/fa";

function Todo({todo, todos, setTodos, onChange}) {
    const [showUpdate, setShowUpdate] = useState(false)

    // const completeTodo = todo => {
    //     let newTodos = todos.map(task => {
    //         if (task.id === todo.id) task.completed = !todo.completed
    //         return task
    //     })
    //     setTodos(newTodos)
    // }

    async function completeTodo() {
        await axios.patch(`http://127.0.0.1:8000/api/todos/${todo.id}/`, {
            completed: !todo.completed
        })
            .then(() => onChange())
            .catch(err => console.error(err))
    }


    // const deleteTodo = id => {
    //     let confirmation = window.confirm('Do you really want to delete this task?')
    //     if (confirmation) setTodos([...todos.filter(todo => todo.id !== id)])
    // }

    async function deleteTodo() {
        let confirmation = window.confirm('Do you really want to delete this task?')
        if (confirmation) {
            await axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}/`)
                .then(() => onChange())
                .catch(err=> console.error(err))
        }
    }


    return (
        <div className="todo">
            {showUpdate ? (
                <TodoUpdate
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    showUpdate={showUpdate}
                    setShowUpdate={setShowUpdate}
                    onChange={onChange}
                />
            ) : (
                <div className={todo.completed ? 'completed' : ''}>
                    <input type="checkbox" className="checkbox" checked={todo.completed}
                           onClick={() => completeTodo(todo)}/>
                    <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
                    <i className="icon" onClick={() => deleteTodo(todo)}>
                        <MdDeleteForever size={30} color={'red'}/>
                    </i>
                    <i className="icon" onClick={() => setShowUpdate(!showUpdate)}>
                        <FaRegEdit size={28} color={'grey'}/>
                    </i>
                </div>
            )}
        </div>
    );
}

export default Todo;