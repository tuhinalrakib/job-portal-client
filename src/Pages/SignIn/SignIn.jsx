import React, { use } from 'react';
import registerLottie from "../../assets/looties/login.json"
import AuthContext from '../../contexts/AuthContext';
import Lottie from 'lottie-react';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
    const { signInUser } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/"

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const formObj = new FormData(form)
        const { email, password } = Object.fromEntries(formObj.entries())
        
        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(from)
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <div className="bg-linear-to-br from-cyan-800 to-blue-500 hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: "200px" }} loop={true} animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    name='email'
                                />
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    name='password'
                                />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;