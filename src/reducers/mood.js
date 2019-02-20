import { CHANGE_HAPPY , CHANGE_MAD , CHANGE_NORMAL } from '../constants/index';

const mood = (state={} , action) => {
    switch(action.type){
        case CHANGE_HAPPY: 
            return {
                ...state,
                mood : 'happy'
            };
        case CHANGE_MAD: 
            return {
                ...state,
                mood : 'mad'
            };
        case CHANGE_NORMAL: 
            return {
                ...state,
                mood : 'normal'
            };  
        default:
            return state
    }
}

export default mood;