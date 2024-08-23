import React from 'react';
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongoDB.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png"

function Projects() {
    const cardItem=[{
        id:1,
        logo:mongoDB,
        name:"mongoDB"
    },
    {
        id:2,
        logo:express,
        name:"Express"
    },
    {
        id:3,
        logo:reactjs,
        name:"ReactJS"
    },
    {
        id:4,
        logo:nodejs,
        name:"NodeJS"
    },
    {
        id:5,
        logo:python,
        name:"Python"
    },
    {
        id:6,
        logo:java,
        name:"Java"
    }
]
  return (
    <div name="Project" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10" >
        <div className='  mb-5'>
            <p className='text-4xl'>My Recent<span className='text-4xl text-red-700 font-bold'> Projects</span></p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div key={id} className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 '>
                            <img src={logo} className='w-[120px] h-[120px] rounded-2xl border-[2px]' alt="" />
                            <div>
                                <div className='font-bold mb-2 text-xl px-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, amet! Necessitatibus tenetur eaque excepturi hic illum quibusdam ea alias dolore facilis atque quos enim, a cumque? Repellendus laboriosam tempora voluptates.</p>
                            </div>
                            <div className='justify-around px-10 space-x-5'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl'> Github</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-xl'> Demo</button>
                            </div>
                           
                        </div>

                ))
            }
            </div>
        </div>
    </div>
    
  );
}

export default Projects