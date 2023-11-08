import { WeatherResponse } from "@/types"

export type WeatherProps = {
    data: WeatherResponse | undefined
}

export default function Weather({ data }: WeatherProps) {
    return (
        <div>
            {data ? 
                <h1>Weather</h1> 
                : 
                <p>No Weather Information Available</p>
            }
        </div>
    )
}