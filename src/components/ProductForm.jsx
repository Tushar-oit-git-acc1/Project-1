import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/ProductForm.css';

const ProductForm = () => {
    const validationSchema = Yup.object({
        textInput: Yup.string()
            .max(25, 'Maximum 25 characters allowed')
            .required('Text input is required'),
        passwordInput: Yup.string()
            .max(14, 'Maximum 14 characters allowed')
            .required('Password is required'),
        emailInput: Yup.string()
            .email('Invalid email')
            .max(25, 'Maximum 25 characters allowed')
            .required('Email is required'),
        numberInput: Yup.number()
            .integer('Must be a valid number')
            .min(1e9, 'Must be at least 10 digits')
            .max(9999999999, 'Cannot exceed 10 digits')
            .required('Number is required'),
        telInput: Yup.string()
            .matches(/^\d{10,12}$/, 'Must be between 10 to 12 digits')
            .required('Telephone number is required'),
        urlInput: Yup.string()
            .url('Invalid URL')
            .max(50, 'Maximum 50 characters allowed')
            .required('URL is required'),
        textareaInput: Yup.string()
            .max(100, 'Maximum 100 characters allowed')
            .required('Textarea is required'),
        checkboxInput: Yup.array()
            .min(1, 'At least one checkbox must be selected')
            .required('Select at least one option'),
        radioInput: Yup.string().required('Select one option'),
        selectInput: Yup.string().required('Select an option'),
        fileInput: Yup.mixed()
            .required('A file is required')
            .test('fileType', 'Unsupported file type', (value) =>
                value ? ['image/jpeg', 'image/png'].includes(value.type) : false
            ),
        dateInput: Yup.date().required('Date is required'),
        timeInput: Yup.string().required('Time is required'),
        colorInput: Yup.string().required('Color is required'),
        rangeInput: Yup.number().required('Range value is required'),
        hiddenInput: Yup.string().required('Hidden input is required'),
    });

    const initialValues = {
        textInput: '',
        passwordInput: '',
        emailInput: '',
        numberInput: '',
        telInput: '',
        urlInput: '',
        textareaInput: '',
        checkboxInput: [],
        radioInput: '',
        selectInput: '',
        fileInput: null,
        dateInput: '',
        timeInput: '',
        colorInput: '',
        rangeInput: 50,
        hiddenInput: 'hiddenValue',
    };

    const handleSubmit = (values) => {
        localStorage.setItem('formData', JSON.stringify(values));
        console.log('Form data saved to localStorage:', values);
    };

    const retrieveData = () => {
        const data = localStorage.getItem('formData');
        if (data) {
            console.log('Retrieved data from localStorage:', JSON.parse(data));
        } else {
            console.log('No data found in localStorage.');
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div>
                        <label htmlFor="textInput">Text Input (Max 25 characters)</label>
                        <Field name="textInput" type="text" />
                        <ErrorMessage name="textInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Password Input (Max 14 characters)</label>
                        <Field name="passwordInput" type="password" />
                        <ErrorMessage name="passwordInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="emailInput">Email Input (Max 25 characters)</label>
                        <Field name="emailInput" type="email" />
                        <ErrorMessage name="emailInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="numberInput">Number Input (10 digits)</label>
                        <Field name="numberInput" type="number" />
                        <ErrorMessage name="numberInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="telInput">Telephone Input (10-12 digits)</label>
                        <Field name="telInput" type="tel" />
                        <ErrorMessage name="telInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="urlInput">URL Input (Max 50 characters)</label>
                        <Field name="urlInput" type="url" />
                        <ErrorMessage name="urlInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="textareaInput">Textarea (Max 100 characters)</label>
                        <Field name="textareaInput" as="textarea" />
                        <ErrorMessage name="textareaInput" component="div" />
                    </div>
                    <div>
                        <label>Checkbox Input</label>
                        <div className="checkbox-group">
                            <label>
                                <Field
                                    type="checkbox"
                                    name="checkboxInput"
                                    value="pune"
                                />
                                Pune
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="checkboxInput"
                                    value="mumbai"
                                />
                                Mumbai
                            </label>
                        </div>
                        <ErrorMessage name="checkboxInput" component="div" />
                    </div>
                    <div>
                        <label>Radio Input</label>
                        <div className="radio-group">
                            <label>
                                <Field type="radio" name="radioInput" value="pune" />
                                Pune
                            </label>
                            <label>
                                <Field type="radio" name="radioInput" value="mumbai" />
                                Mumbai
                            </label>
                        </div>
                        <ErrorMessage name="radioInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="selectInput">Select Input</label>
                        <Field name="selectInput" as="select">
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage name="selectInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="fileInput">File Input</label>
                        <input
                            id="fileInput"
                            name="fileInput"
                            type="file"
                            onChange={(event) => {
                                setFieldValue('fileInput', event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="fileInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="dateInput">Date Input</label>
                        <Field name="dateInput" type="date" />
                        <ErrorMessage name="dateInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="timeInput">Time Input</label>
                        <Field name="timeInput" type="time" />
                        <ErrorMessage name="timeInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="colorInput">Color Input</label>
                        <Field name="colorInput" type="color" />
                        <ErrorMessage name="colorInput" component="div" />
                    </div>
                    <div>
                        <label htmlFor="rangeInput">Range Input</label>
                        <Field name="rangeInput" type="range" min="0" max="100" />
                        <ErrorMessage name="rangeInput" component="div" />
                    </div>
                    <Field type="hidden" name="hiddenInput" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductForm;
