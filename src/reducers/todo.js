import { SET_TODO_DONE , SET_TODO_PENDING } from '../constants/index';

const todo = (state={} , action ) => {
    switch(action.type){
        case SET_TODO_DONE:
            return state.map((todo , index)=>{
                todo.id === action.id ? {...todo , done:true } : todo
            });
        case SET_TODO_PENDING:
            return state.map((todo , index)=>{
                    todo.id === action.id ? {...todo , done:false } : todo
                });
        
        default:
            return state;
    }
}

export default todo;