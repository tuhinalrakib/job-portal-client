import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL : "http://localhost:3000/"
})

const useAxiosSecure = () => {
    const { user, logoutUser } = useAuth()

    // request interceptors
    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })

    // response interceptors
    axiosInstance.interceptors.response.use(response=>{
        return response
    }, error=>{
        if(error.status === 401 || error.status === 403){
            logoutUser()
            .then(()=>{
                console.log('sign out user for status code 401')
            })
            .catch(e=>{
                console.log(e)
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance
};

export default useAxiosSecure;