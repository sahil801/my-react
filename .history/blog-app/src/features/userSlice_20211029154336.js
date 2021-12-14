import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState : {
        isSignedIn : false,
        userData : null,
        searchInput : 'tech',
        blogData : null
    },
    reducers : {
        setIsSignedIn :(state,action) =>{
            state.isSignedIn = action.payload
        },
        setUserData :(state,action) =>{
            state.userData = action.payload
        },
        setSearchInput :(state,action) =>{
            state.searchInput = action.payload
        },
        setBlogData :(state,action) =>{
            state.blogData = action.payload
        }
    }
});
export const {setIsSignedIn,setUserData,setSearchInput,setBlogData} = userSlice.actions
export const isSignedIn = (state) => state.user.isSignedIn;
export const userData = (state) => state.user.userData;
export const searchInput = (state) => state.user.searchInput;
export const blogData = (state) => state.user.blogData;
