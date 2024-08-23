import React from 'react';
import pic from "../../public/prog.png";

function About() {
  return (
    <>
        <div name="About" className='max-w-screen-2*1 container mx-auto px-4 md:px-20 my-16'>
         <div className='flex flex-col md:flex-row'>
         <div className='md:w-1/1 mt-2 md:mt-1 space-y-2 '>
            <div>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <h1 className='text-red-700 font-bold text-2xl md:text-4xl ml-4'>Arun Singh</h1>
                <br/>
                <h1 className='ml-14 text-2xl'>Wanna know <span  className='text-red-700 font-bold'>Me</span></h1>
                <br/>
                <p className='text-justify'>Hi Everyone, I am <span  className='text-red-700 font-bold'>Arun Singh </span>from<span  className='text-red-700 font-bold'> Lucknow, India.</span>
                I am an Aspiring Fronted Develepment Engineer.
                I have completed my <span  className='text-red-700 font-bold'>Bachelor of Technology </span>in <span  className='text-red-700 font-bold'>Information Technology</span> from Babu Banarasi Das Institute of Technology and Management, Lucknow.</p>
                <br />
                <p className='text-justify'>
                    My mission is to enhance my skills and creativity to produce innovative IT solutions that exceed client expectations and contribute positively to the company. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my limit.
                </p>
            </div>
            </div>
        
        <div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8'>
                <img src={pic} className="rounded-full h-[50%]w-[50%]"  alt="" />
            </div>
        </div>
        
        </div>
        </div>
        <hr/>
    </>
  )
}

export default About