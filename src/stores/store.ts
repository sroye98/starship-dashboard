'use client'

import { configureStore } from "@reduxjs/toolkit";
import LocationSlice from "@/features/location/locationSlice";

export const store = configureStore({
    reducer: {
        location: LocationSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;