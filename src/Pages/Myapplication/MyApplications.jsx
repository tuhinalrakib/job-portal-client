import React, { Suspense } from 'react';
import MyApplicationList from './MyApplicationList';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';

const MyApplications = () => { 
    const {user} = useAuth()   
    const {myApplicationPromise} = useApplicationApi()
    return (
        <div>
            <Suspense fallback={<div>Loading ....</div>}>
                <MyApplicationList myFetch={myApplicationPromise(user.email)}></MyApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;