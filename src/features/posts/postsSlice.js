import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "usman",
        content: "Hi my name is usman i am an it expert."
    },
    {
        id: 2,
        title: "umer",
        content: "Hi my name is umer, i am a civil engineer"
    },
    {
        id: 3,
        title: "ali",
        content: "Hi my name is ali i am a doctor."
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state,action) => {state.push(action.payload)},





        
    }
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;