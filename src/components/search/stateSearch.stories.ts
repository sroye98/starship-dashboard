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
        onHandleOnSubmit: (e) => {},
    }
};

export const Error: Story = {
    args: {
        onHandleOnSubmit: (e) => {},
    }
};

export const Loading: Story = {
    args: {
        onHandleOnSubmit: (e) => {},
    }
};