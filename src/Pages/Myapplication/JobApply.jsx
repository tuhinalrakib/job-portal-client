import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams()
    const { user } = useAuth()
    const { email } = user

    const handleApply = e => {
        e.preventDefault()
        const form = e.target
        const formObject = new FormData(form)
        const { linkedin, github, email } = Object.fromEntries(formObject.entries())

        const application = {
            jobId,
            applicant: linkedin, github, email
        }

        axios.post("http://localhost:3000/applications", application)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application has been Submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <form onSubmit={handleApply}>
                <fieldset className="fieldset bg-linear-to-r from-emerald-800 to-violet-800 text-[#ddd] border-base-300 rounded-box w-sm mx-auto my-10 border p-4">

                    <label className="label">Linkedin</label>
                    <input
                        type="url"
                        className="input  text-black"
                        placeholder="Enter Linkedin Link"
                        name='linkedin'
                    />

                    <label className="label">github</label>
                    <input
                        type="url"
                        className="input text-black"
                        placeholder="Enter github Link"
                        name='github'
                    />

                    <label className="label">Email</label>
                    <input
                        type="email"
                        defaultValue={email}
                        className="input text-black"
                        readOnly
                        name='email'
                    />
                    <input type="submit" value="Apply" className='btn ' />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;