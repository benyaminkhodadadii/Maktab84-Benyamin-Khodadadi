import {createSlice} from "@reduxjs/toolkit";

const init = {
    dataList : [],
    token : ''
}

const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {
        add: (state) => {
            state.dataList.push('added')
        },
        remove: (state) => {
            state.dataList = []
        },
        auth:(state,action)=>{
            state.token = action.payload;
        }

    }
})

export const {auth,add,remove} = dataReducer.actions
export default dataReducer.reducer