export const createTodo = (id ,title , description) => {
    return {
        type:"ADD_TODO",
        id,
        title,
        description,
    }
}
    
export const deleteTodo = ( id ) => {
    return {
        type:"REMOVE_TODO",
        id,
    }
}

export const setPendingTodo = ( id ) => {
    return {
        type :"SET_PENDING",
        id
    }
}

export const setDoneTodo = ( id ) => {
    return {
        type : "SET_DONE",
        id
    }
}