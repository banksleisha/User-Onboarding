import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';


//props from Formik
export default function OnBoard({values, touched, errors, status}) {
    //local state that holds successful form submission data
    const [member, setMember] = useState([]);

useEffect(() => {
    //listens for status changes to update state
    console.log("status has changed!", status);

    status && setMember(member =>[...member, status])
}, [status]);
}

return (
    <div>
    <Form>
        <label htmlFor='name'>
            Name 
            <Field
                id='name'
                type='text'
                name='name'
                placeholder='Full name'
            />
        </label>
        <label htmlFor='email'>
            Email 
            <Field 
                id='email'
                type='email'
                name='email'
                placeholder='Email'
            />
        </label>
        <label htmlFor='password'>
            Password 
            <Field
                id='password'
                type='password'
                name='password'
                placeholder='Enter Password'
                />
        {touched.password && errors.password && (
            <p>{errors.password}</p>
        )}
        </label>
        
    
    </Form>
    
    
    </div>



)