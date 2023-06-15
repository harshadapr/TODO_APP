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


import axios from "axios";
import { GET_TODO, ADD_SUBTASK } from "./actiontype";

let getData = () => {
    return (dispatch) => {
        axios
            .get(`https://viridian-gopher-vest.cyclic.app/Todo`)
            .then((res) => {
                dispatch(getTodos(res.data));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // Handle the error here, e.g., show an error message to the user
            });
    };
};

let AddTodo = (data) => {
    return (dispatch) => {
        axios
            .post(`https://viridian-gopher-vest.cyclic.app/Todo`, {
                title: data,
                status: false,
                subtasks: [],
            })
            .then((res) => {
                dispatch(getData());
            })
            .catch((error) => {
                dispatch(getData());
                console.error("Error adding todo:", error);
                // Handle the error here, e.g., show an error message to the user
            });
    };
};

let patchData = (id, data) => {
    return (dispatch) => {
        try {
            axios
                .patch(`https://viridian-gopher-vest.cyclic.app/Todo/${id}`, {
                    status: data ? false : true,
                })
                .then((res) => {
                    getData();
                })
                .catch((error) => {
                    dispatch(getData());
                    console.log("first");
                    console.error("Error updating todo:", error);
                    // Handle the error here, e.g., show an error message to the user
                });
        } catch (error) {
            console.error("Error updating todo:", error);
            // Handle the error here, e.g., show an error message to the user
        }
    };
};

let deleteTodo = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://viridian-gopher-vest.cyclic.app/Todo/${id}`)
            .then((res) => {
                dispatch(getData());
            })
            .catch((error) => {
                dispatch(getData());
                console.error("Error deleting todo:", error);
                // Handle the error here, e.g., show an error message to the user
            });
    };
};

let addSubtask = (taskId, subtask) => {
    return (dispatch) => {
        axios
            .post(`https://viridian-gopher-vest.cyclic.app/Todo/${taskId}/subtasks`, {
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