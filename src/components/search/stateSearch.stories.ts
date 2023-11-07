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
        input: 'TX',
        isLoadingState: false,
        onInputChange: () => {},
        onHandleOnSubmit: (e) => {e.preventDefault()},
    }
};

export const Error: Story = {
    args: {
        input: undefined,
        isLoadingState: false,
        onInputChange: () => {},
        onHandleOnSubmit: (e) => {e.preventDefault()},
    }
};

export const Loading: Story = {
    args: {
        input: 'TX',
        isLoadingState: true,
        onInputChange: () => {},
        onHandleOnSubmit: (e) => {e.preventDefault()},
    }
};