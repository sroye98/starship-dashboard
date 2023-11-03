import { ApiStatus } from "@/enums/apiStatus";
import { ICitiesData } from "./citiesData";

export interface IApiData {
    status: ApiStatus,
    error: string | Error,
    data: ICitiesData[] | null | undefined
}