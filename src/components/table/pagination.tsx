import { 
    ArrowLeftIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    ArrowRightIcon 
} from "@chakra-ui/icons";
import { 
    Flex, 
    Text, 
    Tooltip, 
    IconButton, 
    Select 
} from "@chakra-ui/react";
import { 
    ChangeEventHandler, 
    MouseEventHandler 
} from "react";

interface PaginationProps {
    onFirstPageClick: MouseEventHandler<HTMLButtonElement>,
    canPreviousPage: boolean,
    onPreviousPageClick: MouseEventHandler<HTMLButtonElement>,
    pageIndex: number,
    pageLength: number,
    pageSize: number,
    setPageSize: ChangeEventHandler<HTMLSelectElement>,
    onNextPageClick: MouseEventHandler<HTMLButtonElement>,
    canNextPage: boolean,
    onLastPageClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Pagination({onFirstPageClick, canPreviousPage, onPreviousPageClick, pageIndex, pageLength, pageSize, setPageSize, onNextPageClick, canNextPage, onLastPageClick} : PaginationProps) {
    return (
        <Flex justifyContent="space-between" m={4} alignItems="center">
            <Flex>
                <Tooltip label="First Page">
                    <IconButton onClick={onFirstPageClick} isDisabled={!canPreviousPage} icon={<ArrowLeftIcon h={3} w={3} />} mr={4} aria-label={""} />
                </Tooltip>
                <Tooltip label="Previous Page">
                    <IconButton onClick={onPreviousPageClick} isDisabled={!canPreviousPage} icon={<ChevronLeftIcon h={6} w={6} />} aria-label={""} />
                </Tooltip>
            </Flex>

            <Flex alignItems="center">
                <Text flexShrink="0" mr={8}>
                    Page{" "}
                    <Text fontWeight="bold" as="span">
                        {pageIndex + 1}
                    </Text>{" "}
                    of{" "}
                    <Text fontWeight="bold" as="span">
                        {pageLength}
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

            <Flex>
                <Tooltip label="Next Page">
                    <IconButton onClick={onNextPageClick} isDisabled={!canNextPage} icon={<ChevronRightIcon h={6} w={6} />} aria-label={""} />
                </Tooltip>
                <Tooltip label="Last Page">
                    <IconButton onClick={onLastPageClick} isDisabled={!canNextPage} icon={<ArrowRightIcon h={3} w={3} />} ml={4} aria-label={""} />
                </Tooltip>
            </Flex>
        </Flex>
    )
};