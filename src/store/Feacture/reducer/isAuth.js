import {createSlice} from "@reduxjs/toolkit";

const init = {
    dataList : [],
    token : ''
}

const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {

        auth:(state,action)=>{
            state.token = action.payload;
        },
        orders:(state,action)=>{
            state.dataList.push(action.payload)
        }

    }
})

export const {auth,orders} = dataReducer.actions
export default dataReducer.reducer