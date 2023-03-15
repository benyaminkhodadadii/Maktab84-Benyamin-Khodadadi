import {createSlice} from "@reduxjs/toolkit";

const init = {counter:0,dataList:[]}
const dataBase = createSlice({
    name: 'dataBase',
    initialState: init,
    reducers: {
        increase:(state)=>{
            state.counter++
        },
        decrease:(state)=>{
            state.counter<=0 ? state.counter =0 : state.counter--
        },
        orderItems:(state,action)=>{
            state.dataList= [...state.dataList,action.payload]
        }
    }
})

export const {increase,decrease,orderItems} = dataBase.actions
export default dataBase.reducer