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
    state = {
        count:0,
    }
    
    render(){
        return(
            <div id="todos">
                <InputForm/>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Todos)