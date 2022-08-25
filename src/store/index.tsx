import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { locations: []};

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    init(state,action) {
      state.locations=action.payload;
    },
  }
});

const store = configureStore({
  reducer: locationSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>


export const locationActions = locationSlice.actions;

export default store;