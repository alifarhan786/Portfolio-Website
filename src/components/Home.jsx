import React from 'react'
import HomeImage from '../assets/heroImage.png'
import { IoIosArrowForward } from 'react-icons/io'


const Home = () => {
    
    return (
        <div id="Home" className='px-5 pt-10  h-screen w-full bg-gradient-to-b  from-black to-pink-900 text-white'>
            <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div>
                    <h2 className='text-4xl sm:text-7xl font-bold '> I am a Front End Developer</h2>
                    <p className='text-gray-300 py-4 max-w-md'>As a frontend developer with 1 year of experience, I have specialized in working with ReactJS, HTML, Tailwind CSS, JavaScript, and other related technologies. I have gained expertise in building responsive and interactive web applications using React components and hooks. </p>
                    <div>
                        <a href='./resume.pdf' download={true} smooth="true" duration={600} className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-600  to-pink-600 cursor-pointer'>
                         Resume
                        <span className='group-hover:rotate-90 duration-300'>
                            <IoIosArrowForward className=' ml-1'/>
                        </span>
                        </a>
                    </div>
                </div>
                <div>
                    <img className=' rounded-3xl my-6 mx-auto w-2/3 md:w-full' src={HomeImage} alt="my prof" />
                </div>
            </div>
        </div>
    )
}

export default Home
