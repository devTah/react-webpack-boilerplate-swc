import { TLocation } from '@api/location';
import { createSlice } from '@reduxjs/toolkit';
export interface GobalState {
  themeMode: string;
  activeBar: string;
  locations: TLocation[];
  categories: any[];
  users: any[];
}

const initialState: GobalState = {
  themeMode: 'dark',
  activeBar: 'home',
  locations: [],
  categories: [],
  users: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setThemeMode(state, action) {
      return { ...state, themeMode: action.payload };
    },
    setLocation(state, action) {
      return { ...state, locations: action.payload };
    },
    setCategories(state, action) {
      return { ...state, categories: action.payload };
    },
    setUsers(state, action) {
      return { ...state, users: action.payload };
    },
  },
});

export const { setThemeMode, setLocation, setCategories } = globalSlice.actions;
export default globalSlice.reducer;
