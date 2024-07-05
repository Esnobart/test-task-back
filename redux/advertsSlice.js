import { createSlice } from "@reduxjs/toolkit"
import { fetchAdverts } from "./operations";

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        loading: false,
        error: false
    },
    extraReducers: builder => 
        builder
            .addCase(fetchAdverts.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = action.payload;
            })
            .addCase(fetchAdverts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
})

export const { pending, success, error } = advertsSlice.actions;

export default advertsSlice.reducer