'use client'

import Clock from '@/components/clock/clock';
import StateSearch from '@/components/search/stateSearch'
import { DataTable } from '@/components/table/dataTable'
import { IApiData } from '@/interfaces/apiData';
import { ICitiesData } from '@/interfaces/citiesData';
import useLocationSearch from '@/libs/useLocationSearch';
import { Box, Container, HStack, Heading, VStack } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { FormEvent, MouseEvent, useState } from 'react';
// import Image from 'next/image'


export default function Home() {
	const [input, setInput] = useState('TX');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<ICitiesData[]>([]);

	const {
		handleCitySearchAsync,
	} = useLocationSearch();

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	}

	const handleOnLocationSearchClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const results: IApiData = await handleCitySearchAsync(input);
		setData(results.data!);

		setIsLoading(false);
	}

	const columnHelper = createColumnHelper<ICitiesData>();

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
		<Container maxW='full'>
			<VStack spacing={10} align='stretch'>
				<Heading>Starship Dashboard</Heading>
				<HStack spacing={10}>
					<Box p={4} borderWidth='1px' borderRadius='lg'>
						<StateSearch 
							input={input} 
							onInputChange={handleInputChange} 
							isLoadingState={isLoading}
							onHandleOnSubmit={handleOnLocationSearchClick} />
					</Box>
					<Box p={4} borderWidth='1px' borderRadius='lg'>
						<Clock />
					</Box>
				</HStack>

				<Box p={4} borderWidth='1px' borderRadius='lg'>
					<DataTable columns={columns} data={data} />
				</Box>
			</VStack>
		</Container>
	)
}
