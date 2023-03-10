import {createSlice} from "@reduxjs/toolkit";

const init = {
    dataList:[],
}
const dataBase = createSlice({
    name: 'dataBase',
    initialState: init,
    reducers: {
        allData:(state,action)=>{
            state.dataList = action.payload;
        }
    }
})

export const {allData} = dataBase.actions
export default dataBase.reducer