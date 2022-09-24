import React from 'react';

const Todo = ({todo}) => {
let newIce = todo.completed.toString()

    return (
        <div>

            <h3>UserId: {todo.userId} - ID: {todo.id} <br/>
                Title :{todo.title}</h3>
            <p>completed: {newIce}</p>
</div>
    );
};

export default Todo;