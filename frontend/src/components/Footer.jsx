import React from 'react';

function Footer({todos, setTodos, initialTodos}) {

    const filterTodos = completed => {
        if (completed) {
            setTodos(initialTodos.filter(task => task.completed))
        } else {
            setTodos(initialTodos.filter(task => !task.completed))
        }
    }



    return (
        <div className="footer">
            <span onClick={() => setTodos(initialTodos)}>{(todos) ? todos.length : '0'} tasks</span>
            <span onClick={() => filterTodos(true)}>{(todos) ? todos.filter(todo => todo.completed).length : '0'} completed</span>
            <span onClick={() => filterTodos( false)}>{(todos) ? todos.filter(todo => !todo.completed).length : '0'} open</span>

        </div>
    );
}

export default Footer;