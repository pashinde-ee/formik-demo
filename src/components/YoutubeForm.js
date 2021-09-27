import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: ""
};

const onSubmit = values => {
    console.log(values)
}

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name field is required";
    }

    if (!values.email) {
        errors.email = "Email field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }

    if (!values.channel) {
        errors.channel = "Channel field is required";
    }

    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name field is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email field is required'),
    channel: Yup.string().required('Channel field is required')
})

function YouTubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate
        validationSchema
    });

    console.log(formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }
                </div>
                 <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input 
                        type="text"
                        id="channel"
                        name="channel"
                        value={formik.values.channel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default YouTubeForm;