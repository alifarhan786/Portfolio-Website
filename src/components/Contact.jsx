import React from 'react'
import { FiPhoneCall , FiMail} from 'react-icons/fi'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
const Contact = () => {
    const icons = [{
        id: 1,
        icon : (<FiMail size={30} />),
        href : "mailto:alifarhan358@gmail.com",

    },
    {
        id: 2,
        icon : (<FiPhoneCall size={30} />),
        href : "tel:8963079448",

    },
    {
        id: 3,
        icon : (<FaLinkedin size={30} />),
        href : "https://www.linkedin.com/in/alifarhan358",

    },
    {
        id: 4,
        icon : (<FaGithub size={30} />),
        href : "https://github.com/alifarhan786",

    }]
    return (
        <div id="Contact" className='pt-20 h-screen w-full bg-gradient-to-b from-black to-pink-900 text-white p-4'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <div className='flex justify-center items-center space-x-5 py-5 '>
                        {icons.map(({href,id,icon})=>(
                            <a key={id} className="hover:scale-125 duration-300" href={href}>{icon}</a>
                        ))}
                    </div>
                        <p>Submit the form below to get in touch </p>

                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/0ed0fc50-f370-467d-93a2-c76d39376228" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='Name' placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
                        <input type="email" name='Email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
                        <textarea name="Message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button type='submit' className='b bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
