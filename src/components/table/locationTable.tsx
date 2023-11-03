'use client'

import { 
    Table, 
    TableContainer, 
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import { useAppSelector } from "@/stores/hooks";
import { selectSearchCities } from "@/features/location/locationSlice";

export default function LocationTable() {
    const headerColumns: string[] = ["Id", "Name", "State"];
    const cities = useAppSelector(selectSearchCities);

    const headers = headerColumns.map((head) => {
        return (
            <Th key={headerColumns.indexOf(head)}>
                {head}
            </Th>
        )
    });

    const rows = cities.map((city) => {
        return (
            <Tr key={city.id}>
                <Td>{city.id}</Td>
                <Td>{city.name}</Td>
                <Td>{city.state}</Td>
            </Tr>
        )
    });

    return (
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                    <Tr>
                        {headers}
                    </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>
        </TableContainer>
    )
}