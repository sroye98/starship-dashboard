'use client'

import { WeatherFormValues } from '@/types';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormHelperText,
    Input,
    SimpleGrid,
    Card,
    CardHeader,
    CardFooter,
    Heading,
    CardBody,
    Spacer,
    ButtonGroup,
} from '@chakra-ui/react';
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from 'react-hook-form';

export type WeatherSearchProps = {
    defaultValues: WeatherFormValues,
    onHandleOnSubmit: SubmitHandler<FieldValues>,
    orientation: 'horizontal' | 'vertical'
}

export default function WeatherSearch({ 
    defaultValues, 
    onHandleOnSubmit, 
    orientation 
}: WeatherSearchProps) {
    const { 
        handleSubmit, 
        register, 
        formState: { 
            errors, 
            isSubmitting 
        } 
    } = useForm({
        defaultValues: defaultValues
    });

    return (
        <form onSubmit={handleSubmit(onHandleOnSubmit)}>
            <Card 
                size="sm" 
                variant="outline"
                borderRadius={10}>
                <CardHeader>
                    <Heading 
                        as="h4" 
                        size="md">
                        Weather Search
                    </Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid 
                        columns={orientation === 'horizontal' ? 2 : 1} 
                        spacing={10}>
                        <FormControl isInvalid={errors.city}>
                            <FormLabel htmlFor="City">
                                Your City
                            </FormLabel>
                            <Input 
                                type="text" 
                                placeholder="Enter your city" 
                                autoComplete="off"
                                {...register('city', {
                                    required: 'City is a required field',
                                })} />
                            <FormErrorMessage>
                                {errors?.city?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.state}>
                            <FormLabel htmlFor="state">Your State</FormLabel>
                            <Input 
                                type="text" 
                                placeholder="Enter your state" 
                                maxLength={2}
                                autoComplete="off"
                                {...register('state', {
                                    required: 'State is a required field',
                                    maxLength: { 
                                        value: 2,
                                        message: "Please use the State abbreviation"
                                    }
                                })} />
                            <FormErrorMessage>
                                {errors?.state?.message}
                            </FormErrorMessage>
                        </FormControl>
                    </SimpleGrid>
                </CardBody>
                <CardFooter alignItems='self-end'>
                    <Spacer />
                    <ButtonGroup spacing='2'>
                        <Button 
                            mt={4} 
                            colorScheme='gray'
                            type='reset'>
                            Clear
                        </Button>
                        <Button 
                            mt={4} 
                            colorScheme='teal' 
                            type='submit' 
                            isLoading={isSubmitting} 
                            isDisabled={errors.city || errors.state}>
                            Submit
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </form>
    )
}