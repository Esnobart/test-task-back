import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, changeFavorite } from "./operations";

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
                state.items = [...state.items, ...action.payload.data];
                state.hasMore = action.payload.hasMore;
            })
            .addCase(fetchAdverts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(changeFavorite.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(changeFavorite.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                const updatedAdvert = action.payload.data; 
                const index = state.items.findIndex(ad => ad._id === updatedAdvert._id);
                if (index !== -1) {
                    state.items[index].isFavorite = updatedAdvert.isFavorite;
                }
                state.hasMore = action.payload.hasMore;
            })
            .addCase(changeFavorite.rejected, state => {
                state.loading = false;
                state.error = true;
            })
});

export const { incrementPage, decrementPage, resetPage } = advertsSlice.actions;
export default advertsSlice.reducer;
