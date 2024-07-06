import { configureStore } from "@reduxjs/toolkit"
import advertsReducer from "./advertsSlice"
import filtersReducer from "./filterSlice"

const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        filters: filtersReducer
    }
})

export default store