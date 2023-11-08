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