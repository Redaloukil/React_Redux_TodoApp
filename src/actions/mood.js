import { CHANGE_HAPPY , CHANGE_NORMAL , CHANGE_MAD } from '../constants/index';

export const changeHappy = () => {
    return {
        type : CHANGE_HAPPY,
    }
}

export const changeMad = () => {
    return {
        type : CHANGE_MAD,
    }
}

export const changeNormal = () => {
    return {
        type : CHANGE_NORMAL,
    }
}