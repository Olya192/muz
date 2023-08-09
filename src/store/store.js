import { configureStore } from "@reduxjs/toolkit"
import { tracksReducer } from "./redusers/tracksReduser"

export const store = configureStore({
    reducer: {
        tracks: tracksReducer
        }

})

