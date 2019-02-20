import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this)
    }

    removeTodo = () => {
        console.log('helo')
        this.props.deleteTodo(this.props.data.id)
    }
    render(){
        return(
            <div className="todo">
                <p>{this.props.data.id}</p>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <button onClick={this.removeTodo}>quit</button>
            </div>
        )
    }
    
}

export default Todo