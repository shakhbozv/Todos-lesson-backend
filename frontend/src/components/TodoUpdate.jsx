import React from 'react';
import Form from "./Form";
import axios from "axios";

function TodoUpdate({todo, todos, setTodos,showUpdate, setShowUpdate, onChange}) {

    // const handleUpdate = (event, value) => {
    //     event.preventDefault()
    //     let newTodo = todos.map(task => {
    //         if (task.id === todo.id) task.title = value
    //         return task
    //     })
    //     setTodos(newTodo)
    //     setShowUpdate(!showUpdate)
    // }

    async function handleUpdate(event, value) {
        event.preventDefault()

        await axios.patch(`http://127.0.0.1:8000/api/todos/${todo.id}/`, {
            title: value
        })
            .then(() => onChange())
            .catch(err => console.error(err))
        setShowUpdate(!showUpdate)
    }

    return (
       <Form todo={todo} onSubmit={handleUpdate}/>
    );
}

export default TodoUpdate;