import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team/developer-celebrate.jpg"
import team2 from "../../assets/team/office-celebrate.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                    src={team1}
                    animate = {{
                        y : [100,150, 100],
                    }}
                    transition={{ duration : 5, repeat : Infinity}}
                    className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                />
                    <motion.img
                    src={team2}
                    animate = {{
                        x : [80,150, 80],
                    }}
                    transition={{ duration : 10, repeat : Infinity}}
                    className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1 
                    initial = {{scale : 0}}
                    animate={{
                        scale : 1,
                        rotate : -182, 
                        transition : {duration : 4}}} 
                    className="text-5xl font-bold">Latest Job for you!</motion.h1> */}
                    <h1 className='text-3xl font-bold'>Remote <motion.span animate={{
                        color : ["#3aa110","#a05619","#919488","#4d7ada"],
                        transition : {duration : 2, repeat : Infinity}
                    }}>Job</motion.span> for you</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;