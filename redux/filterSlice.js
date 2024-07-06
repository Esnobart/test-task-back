import { createSlice } from "@reduxjs/toolkit"

const initialFiltersState = {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    tv: false,
    showerBathroom: false
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFiltersState,
    reducers: {
        toggleFilter(state, action) {
            const filterName = action.payload;
            state[filterName] = !state[filterName];
        },
        clearFilters() {
            return initialFiltersState;
        }
    }
});

export const { toggleFilter, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
