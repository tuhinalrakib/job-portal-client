import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobsLists from './JobsLists';
import useApplicationApi from '../../api/useApplicationApi';

const MyPostedJobs = () => {
    const { user } = useAuth()
    const {jobCreatedByPromise} = useApplicationApi()
    
    return (
        <div>
            <Suspense>
                <JobsLists jobsCreatedByPromise={jobCreatedByPromise(user.email, user.accessToken)}></JobsLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;