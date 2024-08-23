import React from 'react';
import pic from "../../public/arun.jpg";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";


function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2*1 container mx-auto px-4 md:px-20 my-20">
       <div className='flex flex-col md:flex-row'> 
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <div>
                    <span className='font-bold text-2xl md:text-4xl '>Hello Everyone!</span>
                </div>
                <br />
                <div>
                    <h1 className='font-bold text-2xl md:text-4xl '>My name is <span className='text-red-700 font-bold text-2xl md:text-4xl' >Arun Singh</span></h1>
                </div>
                <br/>
                <p className='text-2xl text-justify'>I am a Front End Developer who loves to create <span>Reliable, Scalable </span>and<span> Efficient</span> problems of Today and Tomorrow.
                </p>
                <br/>
                
                
                <br/>
               
                <br />
                <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className='space-y-2'>
                    <h1 className='flex  text-2xl font-bold '> Find me on</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/" target='_blank'>
                            <BiLogoGmail  className='text-2xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/arunsingh199" target='_blank'>
                            <FaGithub className='text-2xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="linkedin.com/in/arun-singh-a064b9234" target='_blank'>
                            <FaLinkedin  className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        
                    </ul>
                </div>

                <div className='space-y-2'>
                <h1 className='flex text-2xl font-bold'> I'm working on</h1>
                    <div className='flex space-x-5 ml-14 '>
                        <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    </div>
                </div>
                </div>

            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]"  alt="" />
            </div>
       </div>
    </div>
    <hr/>
    </>
  )
}

export default Home
// space-y-2 text-2xl cursor-pointer