import React from 'react';
import { connect } from 'react-redux';
import { createTodo , deleteTodo } from '../actions/todos';
import Todo from './todo';
import InputForm from '../components/inputform';

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo:(id , title , text) => dispatch(createTodo(id,title,text)),
        removeTodo:(id) => dispatch(deleteTodo(id))
    }
}

class Todos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }
    
    
    addTodo(title,description){
        this.setState({ count:this.state.count + 1 })
        this.props.createTodo(this.state.count , title , description);
    }

    render(){
        return(
            <div id="todos">
                <InputForm addTodo={this.addTodo}/>
                {console.log(this.props)}
                {this.props.todos.map((element, i)=>{
                    return <Todo data={element} key={i}/>
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