import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        isAuth:false,
        email:null,
        token:null,
        id:null
    },
    reducers:{
        setUser(state, action){
            state.isAuth=true,
                state.email=action.user.email,
                state.token=action.user.accessToken,
                state.id=action.user.uid
        },
        removeUser(state){
            state.isAuth=false,
            state.email=null,
            state.token=null,
            state.id=null
        }
    }
})

export default AuthSlice.reducer
export const {setUser, removeUser} = AuthSlice.actions