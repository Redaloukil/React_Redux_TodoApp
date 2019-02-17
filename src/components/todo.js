import React from 'react';

const Todo = (props) => {
    const removeTodo = () => {
        console.log('helo')
        props.deleteTodo(props.id)
    }
    
    return(
        <div className="todo">
            <p>{props.key}</p>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <button onClick={removeTodo}>quit</button>
        </div>
    )
}

export default Todo