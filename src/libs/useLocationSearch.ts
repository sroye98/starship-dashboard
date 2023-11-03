'use client'

import { ApiStatus } from "@/enums/apiStatus";
import { IApiData } from "@/interfaces/apiData";
import { ICitiesData } from "@/interfaces/citiesData";
import { ICityResponse } from "@/interfaces/cityResponse";
import { useState } from "react"; 

const useLocationSearch = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleCitySearchAsync = async (loc: string) => {
        try {
            setLoading(true);

            const normalizedLocation = loc.toUpperCase();

            let results: IApiData = {
                status: ApiStatus.Loading,
                error: '',
                data: []
            };

            var headers = new Headers();
            headers.append("X-CSCAPI-KEY", "bXJHWmxFVnJwRUxjcVVFQ084SFJYMlNtMVB1R21zQTVSYVJtb0Y2OQ==");
            
            var url: string = `https://api.countrystatecity.in/v1/countries/US/states/${normalizedLocation}/cities`;
            var requestOptions: RequestInit = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            };

            await fetch(url, requestOptions)
                .then(response => {
                    if (!response.ok) throw Error(response.statusText);
                    return response.json() as Promise<ICityResponse[]>;
                })
                .then(data => {
                    const dataResults: ICitiesData[] = []
                    data.map((item) => {
                        dataResults.push({
                            id: item.id.toString(),
                            name: item.name,
                            state: normalizedLocation
                        });
                    });

                    results = {
                        status: ApiStatus.Success,
                        error: '',
                        data: dataResults
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
        handleCitySearchAsync,
    };
}

export default useLocationSearch;