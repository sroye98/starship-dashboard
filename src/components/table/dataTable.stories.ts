import type { Meta, StoryObj } from '@storybook/react';

import DataTable from "./dataTable";
import { ICitiesData } from '@/interfaces/citiesData';
import { createColumnHelper } from '@tanstack/react-table';

const meta = {
    title: 'Components/DataTable',
    component: DataTable,
    parameters: {
        layout: 'centered',
    },
    tags: ['components'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

var data: ICitiesData[] = [
    {
        id: "1",
        name: "Austin",
        state: "TX"
    },
    {
        id: "2",
        name: "Dallas",
        state: "TX"
    },
    {
        id: "3",
        name: "Houston",
        state: "TX"
    },
    {
        id: "4",
        name: "San Antionio",
        state: "TX"
    },
];

const columnHelper = createColumnHelper<object>();

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

export const Basic: Story = {
    args: {
        data: data,
        columns: columns,
        tableVariant: 'basic',
        paginationVariant: 'basic',
    }
};

export const Striped: Story = {
    args: {
        data: data,
        columns: columns,
        tableVariant: 'striped',
        paginationVariant: 'advanced',
    }
};