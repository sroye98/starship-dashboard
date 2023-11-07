import { ApiStatus } from "@/enums/apiStatus";
import { ICitiesData } from "./citiesData";
import { WeatherResponse } from "@/types";

export interface IApiData {
    status: ApiStatus,
    error: string | Error,
    data: ICitiesData[] | WeatherResponse | null | undefined 
}