import Lottie from 'lottie-react';
import registerLottie from "../../assets/looties/register.json"
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router';

const Register = () => {
    const { createUser, googleSignIn } = useAuth()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const formObj = new FormData(form)
        const { email, password } = Object.fromEntries(formObj.entries())

        createUser(email, password)
            .then(data => {
                if(data?.user){
                    navigate("/")
                }
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(res=>{
            if(res?.user){
                navigate("/")
            }
        })
        .catch(e=>{
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
                        <h1 className="text-3xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
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
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;