import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import next from '../assets/material.png'
import graph from '../assets/mvc.png'
const Experience = () => {
    const icons =[{ 
        id:1,
        name: "HTML",
        style : "shadow-orange-500",
        img: Html,

    },
    { 
        id:2,
        name: "CSS",
        style : "shadow-blue-500",
        img: Css,

    },
    { 
        id:3,
        name: "JavaScript",
        style : "shadow-yellow-500",
        img: Js,

    },
    { 
        id:4,
        name: "React",
        style : "shadow-blue-600",
        img: react,

    },
    { 
        id:5,
        name: "Node",
        style : "shadow-green-500",
        img: node,

    },
    { 
        id:6,
        name: "Tailwind",
        style : "shadow-sky-400",
        img: tailwind,

    },
    { 
        id:7,
        name: "GITHUB",
        style : "shadow-gray-400",
        img: github,

    },
    { 
        id:8,
        name: "Material UI",
        style : "shadow-blue-500",
        img: next,

    },
    { 
        id:9,
        name: "ASP.Net MVC",
        style : "shadow-orange-400",
        img: graph,

    },]
    return (
        <div id="Experience" className='pt-12 w-full md:h-screen bg-gradient-to-b from-pink-900 to-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-7' >
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                    
                </div>

               
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {icons.map(({id,name,style,img})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                        <div className=''>
                            <img className='w-20 mx-auto ' src={img} alt="" />
                            <p className='mt-4'>{name}</p>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    )
}

export default Experience
