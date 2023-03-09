import dataReducer from './reducer/isAuth'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import dataBase from "./reducer/dataBase";

const combinedReducers = combineReducers({
    data :dataReducer,
    dataBase : dataBase
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['data']},combinedReducers)
export default persistedReducers