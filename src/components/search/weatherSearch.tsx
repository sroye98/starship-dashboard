'use client'

import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export type WeatherSearchProps = {
    onHandleOnSubmit: SubmitHandler<FieldValues>,
}

export default function WeatherSearch({ onHandleOnSubmit }: WeatherSearchProps) {
    const { 
        handleSubmit, 
        register, 
        formState: { 
            errors, 
            isSubmitting 
        } 
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onHandleOnSubmit)}>
            <FormControl>
                <FormLabel htmlFor="City">Your City</FormLabel>
                <Input 
                    type="text" 
                    placeholder="Enter your city" 
                    autoComplete="off"
                    {...register('city', {
                        required: 'City is a required field',
                    })} />
                {!errors.city ? (
                    <FormHelperText>
                        Weather Results will be displayed based on City, State
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>
                        Something went wrong
                    </FormErrorMessage>
                )}
            </FormControl>
            <FormControl>
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
                {!errors.state ? (
                    <FormHelperText>
                        Weather Results will be displayed based on City, State
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>
                        Something went wrong
                    </FormErrorMessage>
                )}
            </FormControl>
            <Button 
                mt={4} 
                colorScheme='teal' 
                type='submit' 
                isLoading={isSubmitting} 
                isDisabled={errors.state?.message != null}>
                Submit
            </Button>
        </form>
    )
}