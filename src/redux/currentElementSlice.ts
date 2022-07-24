import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const initialState: Beer.Item = {
  id: 0,
  name: '',
  image_url: '',
  description: '',
  food_pairing: []
};

const currentElementSlice = createSlice({
  name: 'currentElement',
  initialState: initialState,
  reducers: {
    selectElement: (state, action) => {
          
        state.id = action.payload.id,
        state.name = action.payload.name,
        state.image_url = action.payload.image_url,
        state.description = action.payload.description
        state.food_pairing = action.payload.food_pairing
    }
  },
});

export const { selectElement } = currentElementSlice.actions

export default currentElementSlice.reducer;
