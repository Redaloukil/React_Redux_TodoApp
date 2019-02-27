import React from 'react';
import { setDoneTodo , setPendingTodo} from '../actions/todos';
import { connect } from 'react-redux'


const mapDispatchToProps = (dispatch) => {
    return {
        setPendingTodo : (id) => {dispatch(setPendingTodo(id))},
        setDoneTodo : (id) => {dispatch(setDoneTodo(id))}
    }
}

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
                {this.props.data.done == false ?
                    <button className="btn btn-success  controlButton" onClick={this.props.setDoneTodo}>Done</button>
                    :
                    <button className="btn btn-secondary controlButton" onClick={this.props.setPendingTodo}>Not Done</button>                }
                
                <button className="btn btn-warning controlButton" onClick={this.removeTodo}>Quit</button>
            </div>
            </div>
        )
    }
}


export default connect((()=>{}) , mapDispatchToProps )(Todo);