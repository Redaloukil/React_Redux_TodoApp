import { ADD_TODO , REMOVE_TODO } from '../constants/index';

const todoapp = (state=[] , action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state , 
                {   
                    id : action.id,
                    title : action.title,
                    description : action.description,
                    done : false,
                }
            ]
        case REMOVE_TODO:
            return state.filter((todo, index)=> {
                return todo.id != action.id;
            });
        
        default :
            return state;
    }
}
    
export default todoapp;