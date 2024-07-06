import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        loading: false,
        error: false,
        page: 1,
        hasMore: true
    },
    reducers: {
        incrementPage(state) {
            state.page += 1;
        },
        resetPage(state) {
            state.page = 1;
            state.items = [];
            state.hasMore = true;
        }
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
                state.items = [...state.items, ...action.payload];
            })
            .addCase(fetchAdverts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
});

export const { incrementPage, decrementPage, resetPage } = advertsSlice.actions;
export default advertsSlice.reducer;
