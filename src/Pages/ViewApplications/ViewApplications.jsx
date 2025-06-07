import React from 'react';
import { useLoaderData } from 'react-router';
import axios from "axios"

const ViewApplications = () => {
    const applications = useLoaderData()
    // console.log(applications)
    const handleStatus = (e, app_id)=>{
        // console.log(e.target.value, application)

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status : e.target.value})
        .then(result =>{
            console.log(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }
    
    return (
        <div>
            <h2 className='text-3xl'>Total Applications:{applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Index
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, i) => <tr key={application._id}>
                                <th>{i + 1}</th>
                                <td>{application.applicant}</td>
                                <td>{ }</td>
                                <td>
                                    <select defaultValue={application.status} className="select" onChange={e=>handleStatus(e, application._id)}>
                                        <option disabled={true}>Update Status</option>
                                        <option>Under Review</option>
                                        <option>Call for Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;