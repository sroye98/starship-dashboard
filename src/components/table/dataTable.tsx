'use client'

import { 
    chakra, 
    Flex,
    IconButton,
    Select,
    Table, 
    TableContainer, 
    Tbody, 
    Text,
    Td, 
    Th, 
    Thead, 
    Tooltip,
    Tr, 
} from "@chakra-ui/react";
import { 
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    TriangleDownIcon, 
    TriangleUpIcon 
} from "@chakra-ui/icons";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { 
    ChangeEvent, 
    useState 
} from "react";

export type DataTableProps<Data extends object> = {
    data: Data[];
    columns: ColumnDef<Data, any>[];
    tableVariant: 'basic' | 'striped',
    paginationVariant: 'basic' | 'advanced',
};

export default function DataTable<Data extends object>({
    data,
    columns,
    tableVariant,
    paginationVariant,
}: DataTableProps<Data>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        },
        getPaginationRowModel: getPaginationRowModel()
    });

    const pageSize = table.getState().pagination.pageSize;

    const setPageSize = (e: ChangeEvent<HTMLSelectElement>) => {
        table.setPageSize(Number(e.target.value));
    };

    return (
        <TableContainer>
            <Table variant={tableVariant === 'striped' ? 'striped' : 'simple'}>
                {data && data.length > 1 ? 
                    <Thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                    const meta: any = header.column.columnDef.meta;
                                    return (
                                        <Th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            isNumeric={meta?.isNumeric}>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            <chakra.span pl="4">
                                                {header.column.getIsSorted() ? (
                                                    header.column.getIsSorted() === "desc" ? (
                                                        <TriangleDownIcon aria-label="sorted descending" />
                                                        ) : (
                                                        <TriangleUpIcon aria-label="sorted ascending" />
                                                    )
                                                ) : null}
                                            </chakra.span>
                                        </Th>
                                    );
                                })}
                            </Tr>
                        ))}
                    </Thead>
                    :
                    <Thead>
                        <Tr>
                            <Th></Th>
                        </Tr>
                    </Thead>
                }
                {data && data.length > 1 ? 
                    <Tbody>
                        {table.getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                    const meta: any = cell.column.columnDef.meta;
                                    return (
                                    <Td key={cell.id} isNumeric={meta?.isNumeric}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                    );
                                })}
                            </Tr>
                        ))}
                    </Tbody>
                    :
                    <Tbody>
                        <Tr>
                            <Td>No Data Available</Td>
                        </Tr>
                    </Tbody>
                }
            </Table>
            {data && data.length > 1 ? 
                <Flex justifyContent="space-between" m={4} alignItems="center" maxW='full'>
                    <Flex>
                        <Tooltip label="First Page">
                            <IconButton onClick={() => table.setPageIndex(0)} isDisabled={!table.getCanNextPage()} icon={<ArrowLeftIcon h={3} w={3} />} mr={4} aria-label={""} />
                        </Tooltip>
                        <Tooltip label="Previous Page">
                            <IconButton onClick={() => table.previousPage()} isDisabled={!table.getCanNextPage()} icon={<ChevronLeftIcon h={6} w={6} />} aria-label={""} />
                        </Tooltip>
                    </Flex>

                    { paginationVariant == 'advanced' && 
                        <Flex alignItems="center">
                            <Text flexShrink="0" mr={8}>
                                Page{" "}
                                <Text fontWeight="bold" as="span">
                                    {table.getState().pagination.pageIndex + 1}
                                </Text>{" "}
                                of{" "}
                                <Text fontWeight="bold" as="span">
                                    {table.getPageCount()}
                                </Text>
                            </Text>
                            <Select w={32} value={pageSize} onChange={setPageSize}>
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                    </option>
                                ))}
                            </Select>
                        </Flex>
                    }

                    <Flex>
                        <Tooltip label="Next Page">
                            <IconButton onClick={() => table.nextPage()} isDisabled={!table.getCanNextPage()} icon={<ChevronRightIcon h={6} w={6} />} aria-label={""} />
                        </Tooltip>
                        <Tooltip label="Last Page">
                            <IconButton onClick={() => table.setPageIndex(table.getPageCount() - 1)} isDisabled={!table.getCanNextPage()} icon={<ArrowRightIcon h={3} w={3} />} ml={4} aria-label={""} />
                        </Tooltip>
                    </Flex>
                </Flex>
                :
                <></>
            }
        </TableContainer>
    );
}