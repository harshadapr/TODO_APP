// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, getData, patchData } from "../Redux/action";

// function TodoDisplay() {
//     const todos = useSelector(state => state.todos);

//     // console.log(todos);

//     let dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getData())
//     }, [])

//     return (
//         <div>
//             <h1>Display</h1>
//             {todos.map((e) => {
//                 return (
//                     <div>
//                         <h2>{e.title}</h2>
//                         <button onClick={() => dispatch(patchData(e.id, e.status))}>{e.status ? "completed" : "Pending"}</button>
//                         <button onClick={() => { dispatch(deleteTodo(e.id)) }} >  Delete Task</button>
//                     </div>

//                 )
//             })}
//         </div>
//     );
// }




import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getData, patchData, addSubtask } from "../Redux/action";
import { Box, Button, Heading } from "@chakra-ui/react";

function TodoDisplay() {



    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // const handleUpdateData = () => {
    //     // Update localData state with reduxData
    //     setLocalData(todos);
    // };


    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const handleAddSubtask = (taskId, subtask) => {
        dispatch(addSubtask(taskId, subtask));
    };

    return (
        <Box>
            <Heading as="h1" mb={4}>Display</Heading>
            {todos.map((task) => (
                <Box key={task.id} borderWidth="1px" borderRadius="md" p={4} mb={4}>
                    <Heading as="h2" size="md" mb={2}>
                        {task.title}
                    </Heading>
                    <Button
                        colorScheme={task.status ? "green" : "yellow"}
                        size="sm"
                        onClick={() => {
                            dispatch(patchData(task.id, task.status))
                            // handleUpdateData()
                        }}
                        mr={2}
                    >
                        {task.status ? "Completed" : "Pending"}
                    </Button>
                    <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => {
                            dispatch(deleteTodo(task.id))
                            // handleUpdateData()
                        }}
                    >
                        Delete Task
                    </Button>
                    <Box mt={4}>
                        <Heading as="h3" size="sm" mb={2}>
                            Subtasks:
                        </Heading>
                        {task.subtasks && task.subtasks.map((subtask) => (
                            <Box key={subtask.id} ml={4} mb={2}>
                                <span>{subtask.title}</span>
                            </Box>
                        ))}
                        <Button
                            colorScheme="blue"
                            size="sm"
                            onClick={() => handleAddSubtask(task.id, "New Subtask")}
                        >
                            Add Subtask
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default TodoDisplay;

