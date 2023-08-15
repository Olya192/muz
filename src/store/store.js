import { configureStore } from "@reduxjs/toolkit"
import { tracksReducer } from "./redusers/tracksReduser"
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        tracks: tracksReducer
    },
    middleware: [thunk]
})

