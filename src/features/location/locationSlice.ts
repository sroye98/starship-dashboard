'use client'

import { IAppState } from "@/interfaces/appState";
import { ICitiesData } from "@/interfaces/citiesData";
import { RootState } from "@/stores/store";
import { 
    createSlice, 
    PayloadAction 
} from "@reduxjs/toolkit";

const initialState: IAppState = {
    cityResults: [],
    locationSelected: '',
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        searchCities: (state, action: PayloadAction<ICitiesData[]>) => {
            state.cityResults = action.payload
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.locationSelected = action.payload
        }
    }
});

// actions
export const { searchCities } = locationSlice.actions;

// selectors
export const selectSearchCities = (state: RootState) => state.location.cityResults;

export default locationSlice.reducer;