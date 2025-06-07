import React from 'react';
import axios from "axios"
import useAuth from '../../Hooks/useAuth';

const AddJob = () => {
    const { user } = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        // const data = new FormData(form)
        const formData = Object.fromEntries(new FormData(form).entries())
        const { min, max, currency, ...newJob } = formData
        // Process Salary Range
        newJob.salaryRange = {
            min,
            max,
            currency
        }

        // Process Requirements
        newJob.requirements = newJob.requirements.split(',').map(item => item.trim())
        // Process Responsiblilities
        newJob.responsibilities = newJob.responsibilities.split(",").map(res => res.trim())
        axios.post("http://localhost:3000/jobs", newJob)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='my-5 mx-auto'>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Job Title"
                        name='title'
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Company Name"
                        name='company'
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Company Location"
                        name='location'
                    />
                    <label className="label">Company logo</label>
                    <input
                        type="url"
                        className="input"
                        placeholder="Company logo"
                        name='logo'
                    />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="metaframeworks"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="onSite"
                            aria-label="On-site"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="remote"
                            aria-label="Remote"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="hybrid"
                            aria-label="Hybrid"
                        />
                    </div>
                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Catgory</legend>
                    <select defaultValue="Select a Job Category" name='category' className="select">
                        <option disabled={true}>Select a Job Category</option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                    </select>
                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input type="date" className='input' name='deadline' />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="Minimum Salary"
                                name='min'
                            />
                        </div>
                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="Maximum Salary"
                                name='max'
                            />
                        </div>
                        <div>
                            <label className="label">Currence</label>
                            <select defaultValue="Select a currency" name='currency' className="select">
                                <option disabled={true}>Select a currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EURO</option>
                                <option>RS</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea
                        name="description"
                        className='textarea'
                        placeholder='Job Description'
                    ></textarea>
                </fieldset>

                {/* Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea
                        name="requirements"
                        className='textarea'
                        placeholder='Job Rrequirements(Separated bt comma)'
                    ></textarea>
                </fieldset>

                {/* Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea
                        name="responsibilities"
                        className='textarea'
                        placeholder='Job Responsibilties(Separated bt comma)'
                    ></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related info</legend>

                    <label className="label">HR Name</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Hr Name"
                        name='hrName'
                    />

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input"
                        defaultValue={user.email}
                        placeholder="HR Email"
                        name='hrEmail'
                    />
                </fieldset>
                <input type="submit" value="Add Job" className='btn btn-accent' />
            </form>
        </div>
    );
};

export default AddJob;