'use client'

import { LocationFormValues } from '@/types';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormHelperText,
    Input,
    Card,
    CardHeader,
    Heading,
    CardBody,
    SimpleGrid,
    CardFooter,
    Spacer,
    ButtonGroup,
} from '@chakra-ui/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export type StateSearchProps = {
    defaultValues: LocationFormValues,
    onHandleOnSubmit: SubmitHandler<FieldValues>,
}

export default function StateSearch({ defaultValues, onHandleOnSubmit }: StateSearchProps) {
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
                        State Search
                    </Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid 
                        columns={1} 
                        spacing={10}>
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
                            colorScheme='teal' 
                            type='submit' 
                            isLoading={isSubmitting} 
                            isDisabled={errors.state}>
                            Submit
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </form>
    )
}