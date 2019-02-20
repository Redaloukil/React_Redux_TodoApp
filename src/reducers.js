import { combineReducers } from 'redux';
import todoapp from './reducers/todoapp';
import mood from './reducers/mood'

const reducers = combineReducers({
    todoapp,
    mood
})

export default reducers;