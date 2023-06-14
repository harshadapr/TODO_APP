// import React, { useState } from "react";
// import { useDispatch } from "react-redux"
// import { AddTodo } from "../Redux/action";

// function TodoInput() {

//     let [inputData, setinputData] = useState();

//     const dispatch = useDispatch()

//     return (
//         <div>
//             <input type="text" placeholder="Add task" onChange={(e) => { setinputData(e.target.value) }} />
//             <button onClick={() => {
//                 dispatch(AddTodo(inputData))

//                 console.log("hello")
//             }}>submit</button>
//         </div>
//     )
// }
// export default TodoInput
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/action";
import { Input, Button, Flex } from "@chakra-ui/react";

function TodoInput() {
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleFormSubmit = () => {
        dispatch(AddTodo(inputData));
        console.log("hello");
    };

    return (
        <Flex align="center" justify="center" my={4}>
            <Input
                type="text"
                placeholder="Add task"
                value={inputData}
                onChange={handleInputChange}
                mr={2}
            />
            <Button colorScheme="blue" onClick={handleFormSubmit}>
                Submit
            </Button>
        </Flex>
    );
}

export default TodoInput;
