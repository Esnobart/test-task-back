import { configureStore } from "@reduxjs/toolkit"
import advertsReducer from "./advertsSlice"
import filtersReducer from "./filterSlice"
import favoriteReducer from "./favoriteSlice"

const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        filters: filtersReducer,
        favorite: favoriteReducer
    }
})

export default store