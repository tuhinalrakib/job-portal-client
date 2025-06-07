import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const jobData = useLoaderData()
    const {_id,company,description} = jobData
    return (
        <div>
            <h2>Company: {company}</h2>
            <p>{description}</p>
            <Link to={`/jobApply/${_id}`} className='btn btn-accent'>Apply Now</Link>
        </div>
    );
};

export default JobDetails;