import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure()

    const myApplicationPromise = email=>{
        return axiosSecure.get(`applications?email=${email}`).then(res=>res.data)
    }

    const jobCreatedByPromise = (email)=>{
        return axiosSecure.get(`jobs?email=${email}`).then(res=>res.data)
    }
    return {
        myApplicationPromise,
        jobCreatedByPromise
    }
};

export default useApplicationApi;