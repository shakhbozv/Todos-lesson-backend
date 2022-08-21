import React, {useState, useEffect} from 'react';
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Main(props) {


    let initialTodos = [
        {
            id: 1,
            title: 'todo 1',
            completed: false

        },
        {
            id: 2,
            title: 'todo 2',
            completed: false

        },
        {
            id: 3,
            title: 'todo 3',
            completed: true

        },
    ]
    let [todos, setTodos] = useState(initialTodos);


    useEffect(() => load(), [])

    function load() {
        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(res => setTodos(res.data))
            .catch(err => console.error(err))
    }


    return (
        <div className="container">
            <div className="box">
                <Header/>
                <Form todos={todos} setTodos={setTodos} onChange={load}/>
                <Todos todos={todos} setTodos={setTodos} onChange={load}/>
                <Footer todos={todos} setTodos={setTodos} initialTodos={initialTodos}/>
            </div>

        </div>
    );
}

export default Main;