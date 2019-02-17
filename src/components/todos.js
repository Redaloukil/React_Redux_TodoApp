import React from 'react';
import { connect } from 'react-redux';
import { createTodo , deleteTodo } from '../actions/todos';
import Todo from './todo';
import InputForm from '../components/inputform';

const mapDispatchToProps = dispatch => {
    return {
        createTodo:(id , title , description) => dispatch(createTodo(id,title,description)),
        removeTodo:(id) => dispatch(deleteTodo(id))
    }
}

class Todos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.addTodo.bind(this)
    }
    
    addTodo(title,description){
        this.setState({ count:this.state.count + 1 })
        this.props.createTodo( this.state.count, title , description);
        
    }   
    
    deleteTodo(){
        this.props.removeTodo()
        this.setState({count:this.state.count - 1 })
        

    }

    render(){
        return(
            <div id="todos">
                <InputForm addTodo={this.addTodo}/>
                {this.props.todos.map((element, i)=>{
                    return <Todo deleteTodo={this.deleteTodo} data={element} key={i} />
                })}
            
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos : state.todoapp
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Todos)