import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";
import {postReducer} from "./slices";

const rootReducer = combineReducers({
userReducer,
postReducer
});
const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}