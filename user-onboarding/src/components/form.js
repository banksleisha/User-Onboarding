import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

//props from Formik
function OnBoard({values, touched, errors, status}) {
    //local state that holds successful form submission data
    const [member, setMember] = useState([]);

useEffect(() => {
    //listens for status changes to update state
    console.log("status has changed!", status);
})
}