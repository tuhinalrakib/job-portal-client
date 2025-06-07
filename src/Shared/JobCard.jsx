import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id,title, location,requirements,salaryRange,jobType, category,company, description, company_logo } = job
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex items-center gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h5 className='text-3xl'>{company}</h5>
                    <p className='flex items-center'><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <h5 className='text-sm font-semibold'>Salary Range: <span className='font-extrabold'>{salaryRange.min}</span> - <span className='font-extrabold'>{salaryRange.max} </span>{salaryRange.currency}</h5>
                <div className="card-actions">
                    {
                        requirements.map((skill,i)=><div key={i} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className='card-actions'>
                    <Link to={`/jobs/${_id}`} className='btn btn-accent w-full text-[#000] font-bold text-xl'>Job Details</Link>

                </div>
            </div>
        </div>
    );
};

export default JobCard;