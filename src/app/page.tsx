'use client'

import { FormEvent, MouseEvent, useState } from 'react';
import { Box, Container, Grid, GridItem, HStack, Heading, VStack } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import StateSearch from '@/components/search/stateSearch';
import DataTable from '@/components/table/dataTable';
import { 
    ApiResponse, 
    CityData, 
} from "@/types";
import useLocationSearch from '@/libs/useLocationSearch';

// import Image from 'next/image'


export default function Home() {
	const [input, setInput] = useState('TX');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<CityData[]>([]);

	const {
		handleCitySearchAsync,
	} = useLocationSearch();

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	}

	const handleOnLocationSearchClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const results: ApiResponse<CityData[]> = await handleCitySearchAsync(input);
		setData(results.data!);

		setIsLoading(false);
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
		<Container maxW='full'>
			<VStack spacing={10} align='stretch'>
				
				<Grid templateColumns='repeat(12, 1fr)' gap={4}>
					<GridItem colSpan={12} alignItems='center'>
						<Heading>Starship Dashboard</Heading>
					</GridItem>
					<GridItem colSpan={4}>
						<StateSearch 
							input={input} 
							onInputChange={handleInputChange} 
							isLoadingState={isLoading}
							onHandleOnSubmit={handleOnLocationSearchClick} />
					</GridItem>
					<GridItem colSpan={2}>

					</GridItem>
				</Grid>
				<HStack spacing={10}>
					<Box p={4} borderWidth='1px' borderRadius='lg'>

					</Box>
					<Box p={4} borderWidth='1px' borderRadius='lg'>
					</Box>
				</HStack>

				<Box p={4} borderWidth='1px' borderRadius='lg'>
					<DataTable columns={columns} data={data} tableVariant='striped' paginationVariant='advanced' />
				</Box>
			</VStack>
		</Container>
	)
}
