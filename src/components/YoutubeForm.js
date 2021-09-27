import React from 'react';
import { useFormik } from 'formik';

function YouTubeForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        }
    });

    console.log(formik.values)

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email" 
                    name="email" 
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                 />

                <label htmlFor="channel">Channel</label>
                <input 
                    type="text"
                    id="channel"
                    name="channel"
                    value={formik.values.channel}
                    onChange={formik.handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default YouTubeForm;