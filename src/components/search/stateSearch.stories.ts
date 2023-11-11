import type { Meta, StoryObj } from '@storybook/react';

import StateSearch from "./stateSearch";

const meta = {
    title: 'Components/StateSearch',
    component: StateSearch,
    parameters: {
        layout: 'centered',
    },
    tags: ['components'],
} satisfies Meta<typeof StateSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        defaultValues: { state: 'TX' },
        onHandleOnSubmit: (e) => {},
    }
};

export const Error: Story = {
    args: {
        defaultValues: { state: '' },
        onHandleOnSubmit: (e) => {},
    }
};

export const Loading: Story = {
    args: {
        defaultValues: { state: 'TX' },
        onHandleOnSubmit: (e) => {},
    }
};