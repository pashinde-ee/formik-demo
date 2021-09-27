import React from 'react';
import { useFormik } from 'formik';

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
function YouTubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log(formik.errors)

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
                    />
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }
                </div>
                 <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input 
                        type="text"
                        id="channel"
                        name="channel"
                        value={formik.values.channel}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default YouTubeForm;