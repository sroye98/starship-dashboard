import { useState } from "react";
import { Heading, Text } from "@chakra-ui/react";

export default function Clock() {
    let datetime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(datetime);

    const UpdateTime=()=>{
        datetime =  new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)

    return (
        <Heading>{time}</Heading>
    )
}