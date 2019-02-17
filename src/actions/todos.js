export const createTodo = (id ,title , description) => {
    return {
        type:"ADD_TODO",
        title,
        id,
        description,
    }
}
    

export const deleteTodo = ( id ) => {
    return {
        type:"REMOVE_TODO",
        id,
    }
}
