import type { Meta, StoryObj } from '@storybook/react';

import Weather from "./weather";
import { WeatherResponse } from '@/types';

const meta = {
    title: 'Components/Weather',
    component: Weather,
    parameters: {
        layout: 'centered',
    },
    tags: ['components'],
} satisfies Meta<typeof Weather>;

export default meta;
type Story = StoryObj<typeof meta>;

const weatherData: WeatherResponse = {
    "coord": {
        "lon": -95.3633,
        "lat": 29.7633
    },
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 288.09,
        "feels_like": 287.99,
        "temp_min": 287.1,
        "temp_max": 289.25,
        "pressure": 1016,
        "humidity": 90
    },
    "visibility": 8047,
    "wind": {
        "speed": 5.66,
        "deg": 360,
        "gust": 10.29
    },
    "clouds": {
        "all": 100
    },
    "dt": 1699643023,
    "sys": {
        "type": 2,
        "id": 2001415,
        "country": "US",
        "sunrise": 1699620116,
        "sunset": 1699658932
    },
    "timezone": -21600,
    "id": 4699066,
    "name": "Houston",
    "cod": 200
}

export const Basic: Story = {
    args: {
        data: weatherData,
    }
};

export const Empty: Story = {
    args: {
        data: undefined
    }
}