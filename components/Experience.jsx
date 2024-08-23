import React from 'react';
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongoDB.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
// import html from "../../public/html.png";
// import css from "../../public/css.jpg";
// import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";



function Experience() {
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
    <div name="Skillset" className="max-w-screen-2x1 container mx-auto px-4 md:pd-20 mt-10" >
        <div className='  mb-5'>
            <p className='text-4xl'>Professional<span className='text-4xl text-red-700 font-bold'> Skillset</span></p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div key={id} className='flex flex-col items-center justify-center rounded-full shadow-mb p-1 cursor-pointer hover:scale-105 duration-300 '>
                            <img src={logo} className='w-[120px] h-[120px]  border-[2px] rounded-full' alt="" />
                            <div>
                                <div className='font-bold mb-2 text-xl px-2'>{name}</div>
                                
                            </div>
                        
                           
                        </div>

                ))
            }
            </div>
        </div>
    </div>
  );
}

export default Experience