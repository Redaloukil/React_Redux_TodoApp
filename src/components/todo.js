import React from 'react';

const Todo = (props) => {
    return(
        
        <div className="todo">
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Todo