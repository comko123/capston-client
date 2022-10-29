import {configureStore,createSlice} from "@reduxjs/toolkit"

const registration = createSlice({
    name:"registration",
    initialState:{spring:[],summer:[],fall:[],winter:[]},
    reducers:{
        addStyle(state,action){
      state[action.payload.list].push(action.payload.value)
        },
        deduplicationStyle(state,action){
            state[action.payload.list].filter((element,index)=>state[action.payload.list].indexOf(element)===index)
        }
        ,
        removeStyle(state,action){
            state[action.payload.list].splice(state[action.payload.list].indexOf(action.payload.value),1)
        }
    }})

    export const{addStyle,removeStyle,deduplicationStyle} = registration.actions

    export default configureStore({
        reducer:{
        addStyleList : registration.reducer
        }})