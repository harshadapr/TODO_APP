// import axios from "axios"
// import { GET_TODO } from "./actiontype"

// let AddTodo = (data) => {
//     return (dispatch) => {
//         axios.post(`http://localhost:8080/Todo`, {
//             title: data,
//             status: false
//         }).then((res) => {
//             return dispatch(getData())
//         })

//     }

// }


// let getData = () => {
//     return (dispatch) => {
//         axios.get(`http://localhost:8080/Todo`).then((res) => {
//             return dispatch(getTodos(res.data))
//         })
//     }
// }


// let patchData = (id, data) => {
//     return (dispatch) => {
//         axios.patch(`http://localhost:8080/Todo/${id}`, { status: data ? false : true }).then((res) => {
//             return dispatch(getData())
//         })
//     }
// }


// let deleteTodo = (id) => {
//     return (dispatch) => {
//         axios.delete(`http://localhost:8080/Todo/${id}`).then((res) => { return dispatch(getData()) })
//     }

// }
// let getTodos = (data) => {

//     return {
//         type: GET_TODO,
//         payload: data
//     }

// }

// export { AddTodo, getTodos, getData, patchData, deleteTodo }

import axios from "axios";
import {
    GET_TODO,
    ADD_SUBTASK,
} from "./actiontype";

let AddTodo = (data) => {
    return (dispatch) => {
        axios
            .post(`http://localhost:8080/Todo`, {
                title: data,
                status: false,
                subtasks: [],
            })
            .then((res) => {
                return dispatch(getData());
            });
    };
};

let getData = () => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/Todo`).then((res) => {
            return dispatch(getTodos(res.data));
        });
    };
};

let patchData = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`http://localhost:8080/Todo/${id}`, { status: data ? false : true })
            .then((res) => {
                return dispatch(getData());
            });
    };
};

let deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8080/Todo/${id}`).then((res) => {
            return dispatch(getData());
        });
    };
};

// let addSubtask = (taskId, subtask) => {
//     return (dispatch) => {
//         axios
//             .post(`http://localhost:8080/Todo/${taskId}/subtasks`, {
//                 title: subtask,
//                 status: false,
//             })
//             .then((res) => {
//                 const addedSubtask = res.data;
//                 dispatch({
//                     type: ADD_SUBTASK,
//                     payload: {
//                         taskId,
//                         subtask: addedSubtask,
//                     },
//                 });
//             });
//     };
// };

let addSubtask = (taskId, subtask) => {
    return (dispatch) => {
        axios.post(`http://localhost:8080/Todo/${taskId}/subtasks`, {
            title: subtask,
            status: false,
        })
            .then((res) => {
                const addedSubtask = res.data;
                dispatch({
                    type: ADD_SUBTASK,
                    payload: {
                        taskId,
                        subtask: addedSubtask,
                    },
                });
            })
            .catch((error) => {
                console.error("Error adding subtask:", error);
                // Handle the error here, e.g., show an error message to the user
            });
    };
};

let getTodos = (data) => {
    return {
        type: GET_TODO,
        payload: data,
    };
};

export { AddTodo, getTodos, getData, patchData, deleteTodo, addSubtask };