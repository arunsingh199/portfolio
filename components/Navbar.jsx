import React, { useState } from 'react';
import pic from "../../public/photo.avif"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';

function Navbar() {
    const[menu,setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Project"
        },
        {
            id:4,
            text:"Skillset"
        },
    ]
  return (
    <>
    <div className="max-w-screen-2*1 container mx-auto px-4 md:pd-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className='flex justify-between  items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-13 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Arun
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            {/* desktop */}
            <div>
                <ul className='hidden md:flex space-x-8 '>
                   {
                    navItems.map(({id,text}) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link>
                            </li>
                    ))
                   }
                </ul>
                <div onClick={()=>setMenu(!menu)} className="md:hidden">
                    {menu ? <ImCross size={24}/> : < FaBars size={24}/>}</div>
            </div>
        </div>
            {/* mobile */}
        {
            menu && (
                <div>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 bg-white'>
                    {
                    navItems.map(({id,text}) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold text-xl' key={id}>
                             <Link
                              onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>{text}</Link>
                            </li>
                    ))
                   }
                    </ul>
                </div>
            )

        }
       
    </div>
    </>
  )
}

export default Navbar