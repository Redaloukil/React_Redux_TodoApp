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
            <div className="col-sm-3">
            <div className={(this.props.data.done == false  ? "pending todo" : "done todo" )}>
                <h1 className="h5">{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <button className="btn btn-warning" onClick={this.removeTodo}>quit</button>
            </div>
            </div>
            
        )
    }
    
}

export default Todo;