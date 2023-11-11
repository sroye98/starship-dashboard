import type { Meta, StoryObj } from '@storybook/react';

import WeatherSearch from "./weatherSearch";

const meta = {
    title: 'Components/WeatherSearch',
    component: WeatherSearch,
    parameters: {
        layout: 'centered',
    },
    tags: ['components'],
} satisfies Meta<typeof WeatherSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        defaultValues: { city: 'Houston', state: 'TX' },
        onHandleOnSubmit: (e) => {},
        orientation: 'horizontal',
    }
};

export const Error: Story = {
    args: {
        defaultValues: { city: 'Houston', state: 'TX' },
        onHandleOnSubmit: (e) => {},
        orientation: 'horizontal',
    }
};

export const Loading: Story = {
    args: {
        defaultValues: { city: 'Houston', state: 'TX' },
        onHandleOnSubmit: (e) => {},
        orientation: 'horizontal',
    }
};