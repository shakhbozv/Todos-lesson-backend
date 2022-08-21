import React, {useEffect, useState} from 'react';
import axios from "axios";

function Form({todos, setTodos, todo, onSubmit, onChange}) {

    const [value, setValue] = useState('')
    async function addTodo(event) {
        event.preventDefault()

        if (value) {
         await axios.post('http://127.0.0.1:8000/api/todos/', {
              title: value,
              description: 'Not given',
              completed: false,
          })
              .then(() => setValue(''))
              .catch(err => console.error(err))
           onChange()
           return
        } else {
            alert('Write something!')
        }
    }

    useEffect(() => todo && setValue(todo.title), [todo])


    return (
        <form className="form" onSubmit={todos ? event => addTodo(event) : event => onSubmit(event, value)}>
            <input
                type="text"
                placeholder="write something"
                onInput={event => setValue(event.target.value)}
                value={value}
            />
        </form>
    );
}

export default Form;