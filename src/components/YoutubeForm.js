import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: ""
};

const onSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name field is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email field is required'),
    channel: Yup.string().required('Channel field is required'),
    address:Yup.string().required('Address is required')
})

function YouTubeForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field 
                        type="text" 
                        id="name" 
                        name="name"
                    />
                    <ErrorMessage name="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email"
                        id="email" 
                        name="email"
                    />
                    <ErrorMessage name="email" />
                </div>
                 <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field 
                        type="text"
                        id="channel"
                        name="channel"
                    />
                    <ErrorMessage name="channel" />
                </div>
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field
                        as="textarea"
                        type="text"
                        id="comments"
                        name="comments"
                    />
                    <ErrorMessage name="comments" />
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {
                            (props) => {
                                const {field,form,meta} = props;
                                return (
                                    <div className="form-controle">
                                        <input type="text" id="address" {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <ErrorMessage name="comments" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default YouTubeForm;