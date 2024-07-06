import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

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
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);