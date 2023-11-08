"use client"

import { useState } from "react";
import { 
	Box, 
	Container, 
	Grid, 
	GridItem, 
	HStack, 
	Heading, 
	VStack 
} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import StateSearch from "@/components/search/stateSearch";
import DataTable from "@/components/table/dataTable";
import { 
    ApiResponse, 
    CityData,
	WeatherResponse, 
} from "@/types";
import useLocationSearch from "@/libs/useLocationSearch";
import useWeatherSearch from "@/libs/useWeatherSearch";
import { FieldValues } from "react-hook-form";
import WeatherSearch from "@/components/search/weatherSearch";

// import Image from "next/image"


export default function Home() {
	const [data, setData] = useState<CityData[]>([]);
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
						alignItems="center">
						<Heading>
							Starship Dashboard
						</Heading>
					</GridItem>
					<GridItem colSpan={6}>
						<StateSearch onHandleOnSubmit={handleOnLocationSearchClick} />
					</GridItem>
					<GridItem colSpan={6}>
						<WeatherSearch onHandleOnSubmit={handleOnWeatherSearchClick} />
					</GridItem>
				</Grid>
				<HStack spacing={10}>
					<Box 
						p={4} 
						borderWidth="1px" 
						borderRadius="lg">
						<DataTable 
							columns={columns} 
							data={data} 
							tableVariant="striped" 
							paginationVariant="advanced" />
					</Box>
					<Box p={4} borderWidth="1px" borderRadius="lg">
						{JSON.stringify(weather)}
					</Box>
				</HStack>
			</VStack>
		</Container>
	)
}
