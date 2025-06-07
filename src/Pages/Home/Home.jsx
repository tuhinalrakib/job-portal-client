import React, { Suspense } from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';
const jobsPromise = fetch("http://localhost:3000/jobs").then(res=>res.json())

const Home = () => {

    return (
        <div className='min-h-screen mx-auto'>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
                <Hotjobs jobsPromise={jobsPromise}></Hotjobs>
            </Suspense>
        </div>
    );
};

export default Home;