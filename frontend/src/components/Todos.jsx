import React from 'react';
import Todo from "./Todo";

function Todos({todos, setTodos, onChange}) {



    return (
        <div className="todos">
            {todos && todos.map (todo => (
                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} onChange={onChange}/>
            ))}
        </div>
    );
}

export default Todos;