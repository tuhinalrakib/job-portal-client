import React, { use } from 'react';
import JobCard from '../../Shared/JobCard';

const Hotjobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Hot Jobs Of the Day</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;