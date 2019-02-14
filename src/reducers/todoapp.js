import { ADD_TODO , REMOVE_TODO } from '../constants/index';

const Todoapp = (state=[] , action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state , 
                {   
                    id : action.id,
                    title : action.title,
                    text : action.text,
                }
            ]
        case REMOVE_TODO :
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
            )
        default :
            return state;
    }
}
    
export default Todoapp;