type Coordinates = {
    lon: number,
    lat: number
}

type WeatherObj = {
    id: number,
    main: string,
    description: string,
    icon: string
}

type MainObj = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
}

type WindObj = {
    speed: number,
    deg: number,
}

type CloudsObj = {
    all: number,
}

type SysObj = {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
}

export type WeatherResponse = {
    coord: Coordinates,
    weather: WeatherObj[],
    base: string,
    main: MainObj,
    visibility: number,
    wind: WindObj,
    clouds: CloudsObj,
    dt: number,
    sys: SysObj,
    timezone: number,
    id: number,
    name: string,
    cod: number
}