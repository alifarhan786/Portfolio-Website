import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const links = [
    {
        id: 1,
        name : (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href :"https://www.linkedin.com/in/alifarhan358",
        style: " rounded-tr-md"

    },
    {
        id: 2,
        name : (
            <>
                GitHub <FaGithub size={30}/>
            </>
        ),
        href :"https://github.com/alifarhan786",
        style : "",

    },
    {
        id: 3,
        name : (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href :"Mailto:",
        style : ""

    },
    {
        id: 4,
        name : (
            <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href :"./resume.pdf",
        style: " rounded-br-md",
        download : true,

    },
]
const Social = () => {
  return ( 
    <div className=' hidden lg:flex  flex-col top-[30%] fixed left-0'>
      <ul>
         {links.map(({id,name,href,style,download})=>(
        <li key={id} className={`flex  justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300  bg-gray-800 ${style}`}>
            
                <a className='flex justify-between items-center w-full text-white' href={href} download={download}>
                {name} 
            </a>
            
        </li>
         ))}
            
      </ul>
    </div>
  )
}

export default Social
