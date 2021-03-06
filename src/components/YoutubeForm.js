import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const savedValues = {
    name: "Prashant",
    email: "p@gmail.com",
    channel: "C1",
    comments: "Welcome",
    address: "221b bakers street",
    social: {
        facebook: "",
        twitter: ""
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
        facebook: "",
        twitter: ""
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name field is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email field is required'),
    channel: Yup.string().required('Channel field is required'),
    address:Yup.string().required('Address is required')
});

const validateComments = value => {
    let error;
    if (!value) {
        error = 'Comments is required';
    }

    return error;
};

function YouTubeForm() {

    const [formValues, setFormValues] = useState(null);

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            //validateOnMount
            enableReinitialize
        >
            {
                formik => {
                    return (
                        <Form>
                            <div className="form-control">
                                <label htmlFor="name">Name</label>
                                <Field 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                />
                                <ErrorMessage name="name" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <Field 
                                    type="email"
                                    id="email" 
                                    name="email"
                                />
                                <ErrorMessage name="email">
                                    {
                                        (errorMsg) => <div className="error">{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-control">
                                <label htmlFor="channel">Channel</label>
                                <Field 
                                    type="text"
                                    id="channel"
                                    name="channel"
                                />
                                <ErrorMessage name="channel" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="comments">Comments</label>
                                <Field
                                    as="textarea"
                                    type="text"
                                    id="comments"
                                    name="comments"
                                    validate={validateComments}
                                />
                                <ErrorMessage name="comments" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="address">Address</label>
                                <FastField name="address">
                                    {
                                        (props) => {
                                            const {field,form,meta} = props;
                                            return (
                                                <div className="form-controle">
                                                    <input type="text" id="address" {...field} />
                                                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                            </div>
                            <div className="form-control">
                                <label htmlFor="facebook">Facebook profile</label>
                                <Field type="text" id="facebook" name="social.facebook" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="twitter">Twitter profile</label>
                                <Field type="text" id="twitter" name="social.facebtwitterok" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="primaryPh">Primary Phone Number</label>
                                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="secondaryPh">Secondary Phone Number</label>
                                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                            </div>

                            <div className="form-control">
                                <label>List of Phone Numbers</label>
                                <FieldArray name="phNumbers">
                                    {
                                        fieldArrayProps => {
                                            const {push, remove, form} = fieldArrayProps;
                                            const {values} = form;
                                            const {phNumbers} = values;

                                            return <div>
                                                    {phNumbers.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumbers[${index}]`} />
                                                            <button type="button" onClick={() => push('')}>{' ' }+{' ' }</button>
                                                            { index > 0 && <button type="button" onClick={() => remove(index)}>{' ' }-{' ' }</button>}
                                                        </div>
                                                    ))}
                                                </div>
                                        }
                                    }
                                </FieldArray>
                            </div>
                            {/* <button type="button" onClick={() => formik.validateField('comments')}>Validate Comments</button>
                            <button type="button" onClick={() => formik.validateForm()}>Validate All</button>
                            <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit  Comments</button>
                            <button type="button" onClick={() => formik.setTouched({
                                name: true,
                                channel: true,
                                comments: true
                            })}>Visit Fields</button> */}
                            <button type="button" onClick={() => setFormValues(savedValues)}>Load saved data</button>
                            <button type="reset">Reset</button>
                            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default YouTubeForm;