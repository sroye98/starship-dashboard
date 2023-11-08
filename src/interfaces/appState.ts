import { ICitiesData } from "./citiesData";

export interface IAppState {
    cityResults: ICitiesData[],
    locationSelected: string
}