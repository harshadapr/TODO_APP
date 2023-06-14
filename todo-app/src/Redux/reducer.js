// import { GET_TODO, POST_TODO } from "./actiontype";

// const initialState = {
//     todos: []
// }
// export const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {

//         case POST_TODO:
//             return {
//                 ...state, todos: [...state.todos, payload]
//             }
//         case GET_TODO: return { ...state, todos: payload }



//         default:
//             break;
//     }
// }

import { GET_TODO, POST_TODO, ADD_SUBTASK } from "./actiontype";

const initialState = {
    todos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        case GET_TODO:
            return { ...state, todos: payload };
        case ADD_SUBTASK:
            const updatedTodos = state.todos.map((task) => {
                if (task.id === payload.taskId) {
                    return {
                        ...task,
                        subtasks: [...task.subtasks, payload.subtask],
                    };
                }
                return task;
            });
            return {
                ...state,
                todos: updatedTodos,
            };
        default:
            return state;
    }
};
