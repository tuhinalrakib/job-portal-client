import React, { use } from 'react';
import { Link } from 'react-router';

const JobsLists = ({ jobsCreatedByPromise }) => {
    const jobListData = use(jobsCreatedByPromise)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobListData.map((job,i)=><tr key={job._id}>
                                <th>{i + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobsLists;