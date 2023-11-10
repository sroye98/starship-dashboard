import moment from 'moment';
import { 
    Box, 
    Card, 
    CardBody, 
    CardHeader, 
    Center, 
    Flex, 
    Heading, 
    Icon, 
    Image, 
    List, 
    ListIcon, 
    ListItem, 
    Spacer, 
    Stat, 
    StatHelpText, 
    StatLabel, 
    StatNumber, 
    Text 
} from '@chakra-ui/react';
import { WeatherResponse } from "@/types";
import { 
    WiDegrees,
    WiFahrenheit, 
    WiHumidity, 
    WiSunrise, 
    WiSunset, 
    WiThermometer 
} from "react-icons/wi";

export type WeatherProps = {
    data: WeatherResponse | undefined
}

export default function Weather({ data }: WeatherProps) {
    return (
        <div>
            {!data ? 
                <Text>No Weather Information Available</Text>
                : 
                <Card>
                    <CardBody>
                        <Box maxW='full'>
                            <Center>
                                <Stat>
                                    <StatLabel>
                                        {data.name}
                                    </StatLabel>
                                    <StatNumber>
                                        {data.main.temp}<Icon as={WiDegrees} />
                                    </StatNumber>
                                    <StatHelpText>
                                        H:{data.main.temp_max}<Icon as={WiDegrees} /> L:{data.main.temp_min}<Icon as={WiDegrees} />
                                    </StatHelpText>
                                </Stat>
                            </Center>
                        </Box>
                        <Box maxW='full'>
                            <Center>
                                <Image 
                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
                                    alt={data.weather[0].description} />
                            </Center>
                            <Center>
                                <Text>
                                    Description: {data.weather[0].description}
                                </Text>
                            </Center>
                        </Box>
                        <Box>
                            <List>
                                <ListItem>
                                    <Flex>
                                        <Box>
                                            <ListIcon 
                                                as={WiThermometer} 
                                                color="green.500" />
                                            {data.main.temp} <Icon as={WiFahrenheit} />
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <ListIcon 
                                                as={WiThermometer} 
                                                color="green.500" />
                                            {data.main.feels_like} <Icon as={WiFahrenheit} />
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex>
                                        <Box>
                                            <ListIcon 
                                                as={WiSunrise} 
                                                color="green.500"/>
                                            {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <ListIcon 
                                                as={WiSunset} 
                                                color="green.500"/>
                                            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <ListIcon 
                                        as={WiHumidity} 
                                        color="green.500" />
                                    {data.main.humidity} %
                                </ListItem>
                            </List>
                        </Box>
                    </CardBody>
                </Card>
            }
        </div>
    )
}