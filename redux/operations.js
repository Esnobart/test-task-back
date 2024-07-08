import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65eb44fd43ce1641893399a6.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
    'adverts/fetch',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get('/adverts', {
                params: {
                    page: page,
                    limit: 4 
                }
            });
            const hasMore = response.data.length === 4;
            return { data: response.data, hasMore: hasMore };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const changeFavorite = createAsyncThunk(
    'adverts/changeFavorite', 
    async ({ _id, isFavorite }) => {
        try {
            const response = await axios.put(`/adverts/${_id}`, { isFavorite });
            const hasMore = response.data.length === 4
            return { data: response.data, hasMore: hasMore }
        } catch (error) {
            console.error('Error updating favorite status:', error);
            throw error; 
        }
    }
);