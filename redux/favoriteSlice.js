import { createSlice } from "@reduxjs/toolkit";
import { fetchFavorite, removeFavorite } from "./operations";

const favoriteSlice = createSlice({
    name: 'favorite',
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
            .addCase(fetchFavorite.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchFavorite.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = [...state.items, ...action.payload.data];
                state.hasMore = action.payload.hasMore;
            })
            .addCase(fetchFavorite.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(removeFavorite.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(removeFavorite.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                const updatedAdvert = action.payload.data; 
                const index = state.items.findIndex(ad => ad._id === updatedAdvert._id);
                if (index !== -1) {
                    state.items[index].isFavorite = updatedAdvert.isFavorite;
                }
                state.hasMore = action.payload.hasMore;
            })
            .addCase(removeFavorite.rejected, state => {
                state.loading = false;
                state.error = true;
            })
});

export const { incrementPage, decrementPage, resetPage } = favoriteSlice.actions;
export default favoriteSlice.reducer;
