'use client'

import StateSearch from '@/components/search/stateSearch'
import LocationTable from '@/components/table/locationTable'
import { Container, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image'

export default function Home() {
	return (
		<VStack>
			<Container>
				<Heading>Starship Dashboard</Heading>
				<StateSearch />
				<LocationTable />
			</Container>
		</VStack>
	)
}
