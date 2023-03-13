import {createSlice} from "@reduxjs/toolkit";

const init = {counter:0}
const dataBase = createSlice({
    name: 'dataBase',
    initialState: init,
    reducers: {
        increase:(state)=>{
            state.counter++
        },
        decrease:(state)=>{
            state.counter<=0 ? state.counter =0 : state.counter--

        }
    }
})

export const {increase,decrease} = dataBase.actions
export default dataBase.reducer