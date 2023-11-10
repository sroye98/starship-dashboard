'use client'

import { Secrets } from "@/constants";
import { ApiStatus } from "@/enums";
import { ApiResponse, WeatherResponse } from "@/types";
import { useState } from "react";

const useWeatherSearch = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleWeatherSearchAsync = async (city: string, state: string) => {
        try {
            setLoading(true);

            let results: ApiResponse<WeatherResponse> = {
                status: ApiStatus.Loading,
                error: '',
                data: null
            };

            const normalizedCity = city.toUpperCase();
            const normalizedState = state.toUpperCase();
            const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${normalizedCity},${normalizedState},US&units=imperial&appid=${Secrets.weatherApiKey!}`;
            const requestOptions: RequestInit = {
                method: 'GET',
                redirect: 'follow'
            };

            await fetch(url, requestOptions)
                .then(response => {
                    if (!response.ok) throw Error(response.statusText);
                    return response.json() as Promise<WeatherResponse>;
                })
                .then(data => {
                    results = {
                        status: ApiStatus.Success,
                        error: '',
                        data: data
                    };
                })
                .catch(err => {
                    results = {
                        status: ApiStatus.Error,
                        error: err,
                        data: null
                    }
                });

            setLoading(false);

            return results;
        } catch {
            return {
                status: ApiStatus.Error,
                error: "something unexpected happened",
                data: null
            };
        } finally {
            setLoading(false);
        }
    };

    return {
        isLoading,
        handleWeatherSearchAsync,
    };
}

export default useWeatherSearch;