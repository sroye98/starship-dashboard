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
                            <Stat textAlign="center">
                                <StatLabel>
                                    {data.name}
                                </StatLabel>
                                <StatNumber>
                                    {data.main.temp}&nbsp;&deg;
                                </StatNumber>
                                <StatHelpText>
                                    H:{data.main.temp_max}&nbsp;&deg; L:{data.main.temp_min}&nbsp;&deg;
                                </StatHelpText>
                            </Stat>
                        </Box>
                        <Box maxW='full'>
                            <Center>
                                <Image 
                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
                                    alt={data.weather[0].description} />
                            </Center>
                            <Center>
                                <Heading as="h2" size="md">
                                    {data.weather[0].main}
                                </Heading>
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
                                            {data.main.temp}&nbsp;&deg;F
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <ListIcon 
                                                as={WiThermometer} 
                                                color="green.500" />
                                            {data.main.feels_like}&nbsp;&deg;F
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