import { configureStore } from "@reduxjs/toolkit"
import advertsReducer from "./advertsSlice"

const store = configureStore({
    reducer: {
        adverts: advertsReducer
    }
})

export default store