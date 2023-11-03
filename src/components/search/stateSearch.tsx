'use client'

import useLocationSearch from '@/libs/useLocationSearch';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react';
import { 
    Field, 
    Form, 
    Formik, 
    FormikProps, 
} from "formik";
import { useAppDispatch } from '@/stores/hooks';
import { searchCities } from "@/features/location/locationSlice";

interface FieldProps {
    field: {
        name: string;
        value: any;
        onChange: (event: React.ChangeEvent<any>) => void;
        onBlur: (event: React.FocusEvent<any>) => void;
    };
    form: {
        touched: { [field: string]: boolean };
        errors: { [field: string]: boolean };
    };
} 

export default function StateSearch() {
    function validateState(value: string) {
        let error

        if (!value) {
            error = 'State is required'
        } else if (value.length > 2 || value.length < 2) {
            error = 'Please use State two digit abbreviation'
        }

        return error
    }

    const {
        handleCitySearchAsync,
        isLoading
    } = useLocationSearch();

    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={{ state: 'TX' }} 
            onSubmit={async (values, actions) => {
                const cities = await handleCitySearchAsync(values.state);
                actions.setSubmitting(isLoading);
                if (cities && cities.data) {
                    dispatch(searchCities(cities.data!));
                    values.state = '';
                }
            }}>
            {(props: FormikProps<{state:string}>) => (
                <Form>
                    <Field name='state' validate={validateState}>
                        {({ field, form }: FieldProps) => (
                            <FormControl isInvalid={form.errors.state && form.touched.state}>
                                <FormLabel>Your State</FormLabel>
                                <Input {...field} placeholder='Enter your state' />
                                <FormHelperText>Weather Results will be displayed based on City, State Selected below</FormHelperText>
                                <FormErrorMessage>
                                    {form.errors.state}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button mt={4} colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}