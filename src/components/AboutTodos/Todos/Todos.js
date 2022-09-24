import React, {useEffect, useState} from 'react';
import {todosService} from "../../../services";
import Todo from "../Todo/Todo";

const Todos = () => {

    const [todos,setTodos] = useState([]);


    useEffect(()=> {
        todosService.getAll().then(({data}) => setTodos(data))
    },[])

    console.log(todos)

    return (
        <div className={'Todos'}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {Todos};