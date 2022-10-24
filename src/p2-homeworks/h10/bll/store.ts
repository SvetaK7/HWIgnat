import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore, legacy_createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themeR: themeReducer

})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
