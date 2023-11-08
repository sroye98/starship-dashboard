"use client"

import { useState } from "react";
import { 
	Box, 
	Container, 
	Grid, 
	GridItem, 
	HStack, 
	Heading, 
	VStack,
	Text,
} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import StateSearch from "@/components/search/stateSearch";
import DataTable from "@/components/table/dataTable";
import { 
    ApiResponse, 
    CityData,
	LocationFormValues,
	WeatherFormValues,
	WeatherResponse, 
} from "@/types";
import useLocationSearch from "@/libs/useLocationSearch";
import useWeatherSearch from "@/libs/useWeatherSearch";
import { FieldValues } from "react-hook-form";
import WeatherSearch from "@/components/search/weatherSearch";
import Weather from "@/components/weather/weather";

// import Image from "next/image"


export default function Home() {
	const [locationValues, setLocationValues] = useState<LocationFormValues>({
		state: 'TX'
	});
	const [data, setData] = useState<CityData[]>([]);
	const [weatherValues, setWeatherValues] = useState<WeatherFormValues>({
		city: 'Houston',
		state: 'TX'
	});
	const [weather, setWeather] = useState<WeatherResponse>();

	const {
		handleCitySearchAsync,
	} = useLocationSearch();

	const { 
		handleWeatherSearchAsync,
	} = useWeatherSearch();

	const handleOnLocationSearchClick = async (values: FieldValues) => {
		const results: ApiResponse<CityData[]> = await handleCitySearchAsync(values.state);
		setData(results.data!);
	}

	const handleOnWeatherSearchClick = async (values: FieldValues) => {
		const results: ApiResponse<WeatherResponse> = await handleWeatherSearchAsync(values.city, values.state);
		setWeather(results.data!);
	}

	const columnHelper = createColumnHelper<CityData>();

	const columns = [
		columnHelper.accessor("id", {
			cell: (info) => info.getValue(),
			header: ""
		}),
		columnHelper.accessor("name", {
			cell: (info) => info.getValue(),
			header: "Name"
		}),
		columnHelper.accessor("state", {
			cell: (info) => info.getValue(),
			header: "State",
		})
	];
	
	return (
		<Container maxW="full">
			<VStack 
				spacing={10} 
				align="stretch">
				<Grid 
					templateColumns="repeat(12, 1fr)" 
					gap={4}>
					<GridItem 
						colSpan={12} 
						textAlign="center">
						<Heading>
							Starship Dashboard
						</Heading>
					</GridItem>
					<GridItem colSpan={6}>
						<StateSearch 
							defaultValues={locationValues}
							onHandleOnSubmit={handleOnLocationSearchClick} />
						<DataTable 
							columns={columns} 
							data={data} 
							tableVariant="striped" 
							paginationVariant="advanced" />
					</GridItem>
					<GridItem colSpan={6}>
						<WeatherSearch 
							defaultValues={weatherValues}
							onHandleOnSubmit={handleOnWeatherSearchClick} 
							orientation="horizontal" />
						<Weather data={weather} />
					</GridItem>
				</Grid>
			</VStack>
		</Container>
	)
}
