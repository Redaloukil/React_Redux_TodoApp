import { combineReducers } from 'redux';
import todoapp from './reducers/todoapp';

const reducers = combineReducers({
    todoapp
})

export default reducers;