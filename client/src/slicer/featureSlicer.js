import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =
{
    todo: [{
        id: 0,
        todo: "hello world"
    }]
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateTodo: (state, action) => {
            // console.log(state, action.payload);
            // initialState.push({ id: Date.now(), todo: state.payload })
            console.log("reducer page", state, action.payload);

        }
    }
})

export default todoSlice.reducer;
export const { updateTodo } = todoSlice.actions;
