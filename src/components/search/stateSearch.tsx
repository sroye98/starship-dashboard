'use client'

import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react';
import { ChangeEventHandler, MouseEventHandler } from 'react';

interface StateSearchProps {
    input: string | number | readonly string[] | undefined,
    onInputChange: ChangeEventHandler<HTMLInputElement> | undefined,
    isLoadingState: boolean,
    onHandleOnSubmit: MouseEventHandler<HTMLButtonElement>,
}

export default function StateSearch({ input, onInputChange, isLoadingState, onHandleOnSubmit }: StateSearchProps) {
    const isError = input === '';

    return (
        <form>
            <FormControl isInvalid={isError}>
                <FormLabel>Your State</FormLabel>
                <Input type="text" name="state" placeholder="Enter your state" value={input} onChange={onInputChange} />
                {!isError ? (
                    <FormHelperText>Weather Results will be displayed based on City, State Selected below</FormHelperText>
                ) : (
                    <FormErrorMessage>Please use State two digit abbreviation</FormErrorMessage>
                )}
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isLoadingState} type='submit' onClick={onHandleOnSubmit}>
                Submit
            </Button>
        </form>
    )
}